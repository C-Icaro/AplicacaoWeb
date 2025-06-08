// Routes for managing user authentication and session
const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/loginController.js');

// GET route to display the login page
router.get('/', LoginController.create);
//router.get('/', LoginController.create);

// Export the router for use in the main application
module.exports = router;