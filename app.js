// Import required dependencies
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

// Configure EJS as the view engine and set views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar dados do formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'keepRoomSecret', // troque por uma string forte em produção
    resave: false,
    saveUninitialized: false
}));

const LoginRoutes = require('./routes/loginRoutes.js');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/', LoginRoutes);
app.use('/', dashboardRoutes);

// Server initialization
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

module.exports = app;