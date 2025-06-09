// Routes for managing user authentication and session
const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/loginController.js');
const registerController = require('../controllers/registerController');

// Rota para exibir a página de login
router.get('/login', LoginController.getLoginPage);

// Rota para processar o login
router.post('/login', LoginController.login);

// Rota para processar o logout
router.get('/logout', LoginController.logout);

// Rota para exibir a página de cadastro
router.get('/register', registerController.getRegisterPage);

// Rota para processar o cadastro
router.post('/register', registerController.register);

// Rota raiz redireciona para o login
router.get('/', (req, res) => {
    res.redirect('/login');
});

// Export the router for use in the main application
module.exports = router;