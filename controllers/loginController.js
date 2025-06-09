const LoginModel = require('../models/loginModel.js');
const User = require('../models/User');

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
            const user = await User.findByEmail(email);
            if (!user || user.password !== password) {
                return res.render('login', { error: 'E-mail ou senha incorretos' });
            }
            // Autenticação bem-sucedida
            // Aqui você pode criar uma sessão, token, etc.
            res.redirect('/dashboard');
        } catch (error) {
            res.render('login', { error: 'Erro ao fazer login. Tente novamente.' });
        }
    },

    // Renderiza a página de cadastro
    getRegisterPage: (req, res) => {
        res.render('register', { error: null });
    },

    // Processa o cadastro
    register: async (req, res) => {
        console.log('Dados recebidos no cadastro:', req.body);
        const { email, password, confirmPassword } = req.body;
        if (!email || !password || !confirmPassword) {
            return res.render('register', { error: 'Preencha todos os campos.' });
        }
        if (password !== confirmPassword) {
            return res.render('register', { error: 'As senhas não coincidem.' });
        }
        try {
            // Verifica se o usuário já existe
            const existingUser = await User.findByEmail(email);
            if (existingUser) {
                return res.render('register', { error: 'E-mail já cadastrado.' });
            }
            // Cria o usuário
            await User.create({ email, password });
            // Redireciona para o login
            res.redirect('/login');
        } catch (error) {
            res.render('register', { error: 'Erro ao criar conta. Tente novamente.' });
        }
    },

    // Processa o logout
    logout: (req, res) => {
        // TODO: Implementar a lógica de logout
        res.redirect('/login');
    }
};

module.exports = loginController;
    