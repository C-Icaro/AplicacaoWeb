const LoginModel = require('../models/loginModel.js');

const loginController = {
    create: async (req, res) => {
        res.render('login.ejs');
    }

    


}

module.exports = loginController;
    