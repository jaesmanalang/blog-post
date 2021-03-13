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

exports.createPost = asyncHandler(async (req, res) => {
    const newPost = await Post.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            post: newPost
        }
    })
})