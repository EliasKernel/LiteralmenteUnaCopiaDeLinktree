const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {data: {title: 'test1', title2: 'Bruh'}});
});

module.exports = router;