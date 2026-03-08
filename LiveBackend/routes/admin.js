const express = require('express');
const router = express.Router();

const { verifyAdmin, requireReAuth } = require('../middlewares/auth');
const { requireCsrf } = require('../middlewares/csrf');
const adminController = require('../controllers/admin');

// ---------------------------------------------------------
// REVIEWS
// ---------------------------------------------------------
router.get('/reviews', verifyAdmin, adminController.getReviews);
router.patch('/reviews/:id/status', verifyAdmin, requireCsrf, adminController.updateReviewStatus);
router.post('/reviews/:id/reply', verifyAdmin, requireCsrf, adminController.replyToReview);
router.delete('/reviews/:id', verifyAdmin, requireCsrf, requireReAuth, adminController.deleteReview);

// ---------------------------------------------------------
// SETTINGS
// ---------------------------------------------------------
router.put('/settings', verifyAdmin, requireCsrf, adminController.updateSettings);
router.post('/settings/revert', verifyAdmin, requireCsrf, requireReAuth, adminController.revertSettings);

// ---------------------------------------------------------
// WORK ITEMS
// ---------------------------------------------------------
router.post('/work', verifyAdmin, requireCsrf, adminController.addWorkItem);
router.put('/work/:id', verifyAdmin, requireCsrf, adminController.updateWorkItem);
router.delete('/work/:id', verifyAdmin, requireCsrf, adminController.deleteWorkItem);

// ---------------------------------------------------------
// EXPORTS & HEALTH
// ---------------------------------------------------------
router.get('/export/reviews', verifyAdmin, adminController.exportReviews);
// Assume export orders uses getOrders, or we add exportOrders back if needed
router.get('/health', verifyAdmin, adminController.healthCheck);

// ---------------------------------------------------------
// ORDERS
// ---------------------------------------------------------
router.get('/orders', verifyAdmin, adminController.getOrders);
router.get('/orders/:id', verifyAdmin, adminController.getOrderDetail);
router.put('/orders/:id/status', verifyAdmin, requireCsrf, adminController.updateOrderStatus);
router.put('/orders/:id/drive-link', verifyAdmin, requireCsrf, adminController.updateOrderDriveLink);
router.post('/orders/:id/message', verifyAdmin, requireCsrf, adminController.sendOrderMessage);

// ---------------------------------------------------------
// DEV MAILBOX
// ---------------------------------------------------------
router.get('/mailbox', verifyAdmin, adminController.getMailbox);
router.delete('/mailbox/:id', verifyAdmin, requireCsrf, adminController.deleteMailboxEmail);

module.exports = router;
