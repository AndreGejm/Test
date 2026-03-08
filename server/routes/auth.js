const express = require('express');
const router = express.Router();

const { authLimiter } = require('../middlewares/rateLimiters');
const authController = require('../controllers/auth');

router.post('/auth', authLimiter, authController.login);
router.post('/logout', authController.logout);

module.exports = router;
