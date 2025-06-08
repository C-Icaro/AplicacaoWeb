// Import required dependencies
const express = require('express');
const app = express();
const path = require('path');

// Configure EJS as the view engine and set views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const LoginRoutes = require('./routes/loginRoutes.js');

app.use('/', LoginRoutes);

// Server initialization
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

module.exports = app;