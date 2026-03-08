# Operational Risk Report
**Date:** 2026-03-04 | **Status:** Pre-Publication

---

## Summary

The application has basic rate limiting in place. The main risks are: (1) the trust proxy misconfiguration making those limits ineffective on Cloud Run, (2) the public `/api/reviews` endpoint with an unbounded `limit` parameter, and (3) no outbound request limits on the email service.

---

## 1. Compute / Scaling Risks

| Risk | Severity | Details |
| :--- | :--- | :--- |
| **Cloud Run default max instances = unlimited** | 🔴 High | Without a max instance limit, a traffic spike or DDoS will scale to hundreds of instances and produce a large GCP bill. |
| **No max instance limit set in deploy scripts** | 🔴 High | `DEPLOYMENT_GUIDE.md` mentions this, but it is not enforced in a config file. Must be set via `--max-instances 3` on first deploy. |
| Trust proxy broken → rate limits per-cluster | 🔴 High | See ISSUE-S1, ISSUE-SEC2. All IPs look like one IP to the limiter. |
| Unbounded `limit` param on `/api/reviews` | 🟡 Medium | Large DB dump possible with single request. |

---

## 2. Endpoint Abuse Vectors

| Endpoint | Rate Limited? | Risk |
| :--- | :--- | :--- |
| `POST /api/admin/auth` | ✅ 10/15min | Protected |
| `POST /api/bookings` | ✅ 5/15min | Protected |
| `POST /api/review-submit` | ✅ 5/15min | Protected |
| `GET /api/reviews` | ❌ None | Unbounded pagination → over-fetch |
| `GET /api/settings` | ❌ None | Read-only, low risk |
| `GET /api/work` | ❌ None | Read-only, low risk |
| `GET /healthz` | ❌ None | Probe endpoint, lightweight |
| `GET /api/csrf-token` | ❌ None | Token generation is cheap |

---

## 3. Email Abuse

| Risk | Severity | Detail |
| :--- | :--- | :--- |
| Booking triggers 2 emails | 🟡 Medium | An attacker submitting rapid bookings (up to rate limit) will trigger customer confirmation + admin notification. 5/15min = 10 emails per IP per 15 minutes. |
| SMTP rate limit not enforced | 🟡 Medium | No email sending rate limit beyond the booking rate limiter. Gmail SMTP has daily limits (500/day for regular, 2000/day for Workspace). |
| Review invite email triggers on order complete | Low | Admin-controlled; no abuse vector. |

---

## 4. Logging Cost Risks

| Risk | Details |
| :--- | :--- |
| Verbose request logging | Every request is logged at INFO level via `app.use(logger.info(...))`. At high traffic this may generate significant Cloud Logging volume. Consider logging only errors + warnings in production or sampling. |
| Structured JSON is efficient | Cloud Logging parses JSON logs natively — costs scale linearly with log volume, not log complexity. |

---

## 5. Cost Guardrails Checklist

```
Cloud Run:
  [x] Graceful shutdown implemented (no over-billing on boot/shutdown)
  [ ] Max instances: set to 3 on first deploy (not yet deployed)
  [ ] Min instances: 0 (scale to zero — set on deploy)
  [ ] Budget Alert: set up in GCP Console (Billing → Budgets)
  [ ] Concurrency: 80 (default, appropriate for Node.js)

Firebase Hosting:
  [x] Static file hosting — negligible cost at this scale
  [x] Free tier: 10 GB storage, 360 MB/day transfer
  [ ] Bandwidth alert: set up in Firebase Console if needed

Database (PostgreSQL / Neon):
  [ ] Use connection pooling (Prisma Accelerate or PgBouncer) — important with Cloud Run's scale-to-zero
  [ ] Monitor connection count — Neon free tier has connection limits
```

---

## 6. Recommended Monitoring Alerts

| Alert | Platform | Metric |
| :--- | :--- | :--- |
| Cloud Run error rate > 5% | GCP Monitoring | `run.googleapis.com/request_count` filtered by `5xx` |
| Cloud Run instance count > 2 | GCP Monitoring | `run.googleapis.com/container/instance_count` |
| Monthly spend > $5 | GCP Billing | Budget alert |
| Database connection failures | Cloud Logging | Filter on `database: "error"` in health log |
| Email failures | Cloud Logging | Filter on `EMAIL_EVENT.*_FAILED` |

---

## 7. Specific Recommendations

1. **Set `trust proxy` to `1`** before deploying to Cloud Run to restore IP-based rate limiting.
2. **Clamp `limit` parameter** on `/api/reviews` to max 50.
3. **Set `--max-instances 3`** on Cloud Run deploy.
4. **Create a GCP Budget Alert** at $5/month to get email notification.
5. **Monitor Gmail SMTP daily quota** if traffic is high — consider SendGrid or Mailgun for production volume.
