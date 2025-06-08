const LoginModel = require('../models/loginModel.js');

const loginController = {
    create: async (req, res) => {
        res.render('login.ejs');
    },

    // Renderiza a página de login
    getLoginPage: (req, res) => {
        res.render('login', { error: null });
    },

    // Processa o login
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            // TODO: Implementar a lógica de autenticação
            // Por enquanto, apenas redireciona para a página inicial
            res.redirect('/dashboard');
        } catch (error) {
            res.render('login', { 
                error: 'E-mail ou senha inválidos'
            });
        }
    },

    // Processa o logout
    logout: (req, res) => {
        // TODO: Implementar a lógica de logout
        res.redirect('/login');
    }
};

module.exports = loginController;
    