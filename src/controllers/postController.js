const Post = require('../models/Post');
const asyncHandler = require('../utils/asyncHandler');

exports.getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({});
    res.status(200).json({
        status: 'success',
        results: posts.length,
        data: {
            posts
        }
    })
});