const express = require('express');
const router = express.Router();

const { reviewSubmitLimiter } = require('../middlewares/rateLimiters');
const reviewsController = require('../controllers/reviews');

router.get('/reviews', reviewsController.getReviews);
router.post('/reviews', reviewsController.rejectDirectSubmit);
router.get('/review-token/:token', reviewsController.validateToken);
router.post('/review-submit', reviewSubmitLimiter, reviewsController.submitReview);

module.exports = router;
