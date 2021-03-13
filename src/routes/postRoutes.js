const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.get('/', postController.getPosts);

router.post('/', (req, res) => {
    res.send('Add Post Routes');
})

module.exports = router;
