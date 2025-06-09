const Register = require('../models/Register');

exports.getRegisterPage = (req, res) => {
    res.render('register', { error: null });
};

exports.register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
        return res.render('register', { error: 'Preencha todos os campos.' });
    }
    if (password !== confirmPassword) {
        return res.render('register', { error: 'As senhas não coincidem.' });
    }
    try {
        const existingUser = await Register.findByEmail(email);
        if (existingUser) {
            return res.render('register', { error: 'E-mail já cadastrado.' });
        }
        await Register.create({ name, email, password });
        res.redirect('/login');
    } catch (error) {
        console.error('Erro ao criar conta:', error);
        res.render('register', { error: 'Erro ao criar conta. Tente novamente.' });
    }
}; 