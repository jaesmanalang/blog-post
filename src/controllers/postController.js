const Post = require('../models/Post');
const HttpError = require('../utils/httpError');
const asyncHandler = require('../utils/asyncHandler');

exports.listView = asyncHandler(async (req, res) => {
    const posts = await Post.find({});
    res.status(200).json({
        status: 'success',
        results: posts.length,
        data: {
            posts
        }
    })
});

exports.detailView = asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        return next(new HttpError(`No post found with that ID`, 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            post
        }
    })
})

exports.createPost = asyncHandler(async (req, res, next) => {
    const newPost = await Post.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            post: newPost
        }
    })
})

exports.deletePost = asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
        return next(new Error('Post not found'));
    }

    res.status(200).json({
        status: 'success',
        data: {
            post
        }
    })
})