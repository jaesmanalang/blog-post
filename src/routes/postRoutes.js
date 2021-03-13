const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.get('/', postController.listView);
router.get('/:id', postController.detailView);
router.post('/', postController.createPost);

module.exports = router;
