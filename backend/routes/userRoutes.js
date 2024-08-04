const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Sign up
router.post('/signup', userController.signup);

// Sign in
router.post('/signin', userController.signin);

// Get user by ID
router.get('/user/:id', userController.getUserById);

// Update user's birthday
router.put('/user/:id/birthday', userController.updateUserBirthday);

module.exports = router;
