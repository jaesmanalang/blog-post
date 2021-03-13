const HttpError = require('../utils/httpError');

const notFound = (req, res, next) => {
    const error = new HttpError(`Can't find ${req.originalUrl} on this server`, 404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
}

module.exports = {
    notFound,
    errorHandler
}