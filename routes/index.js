const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo!' });
});

module.exports = router;
