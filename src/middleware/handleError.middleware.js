const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    console.log('*********************', err);
    let error = {
        ...err
    };
    error.message = err.message;
    if (err.name === 'CastError') {
        const message = err.message || `Resource ${err.value} not found`;
        error = new ErrorResponse(message, 404);
    } else if (err.code === 11000) {
        const message = 'Duplicate value';
        error = new ErrorResponse(message, 400);
    } else if (err.name === 'ValidationError') {
        const message = err.message || Object.values(err.errors).map(val => val.message).join(', ');
        error = new ErrorResponse(message, 400);
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server error'
    })

};
module.exports = errorHandler;