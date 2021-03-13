const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Post Routes');
})

router.post('/', (req, res) => {
    res.send('Add Post Routes');
})

module.exports = router;
