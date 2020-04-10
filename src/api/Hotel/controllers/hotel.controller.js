const Hotel = require('../models/hotel.model');
const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

exports.createHotel = asyncHandler(async (req, res, next) => {
    const hotel = await Hotel.create({
        ...req.body
    });
    res.status(201).json({
        success: true,
        data: hotel
    });
});

exports.getHotels = asyncHandler(async (req, res, next) => {
    const hotels = await Hotel.find({});
    res.status(200).json({
        success: true,
        data: hotels,
        message: 'Loaded'
    });
});

exports.getHotelById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const hotel = await Hotel.findById({
        _id: id
    });
    if (!hotel) {
        throw new ErrorResponse('Hotel not found', 404);
    }
    res.status(200).json({
        success: true,
        data: hotel
    });
});

exports.deleteHotel = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const hotel = await Hotel.findById({
        _id: id
    });
    if (!hotel) {
        throw new ErrorResponse('Hotel Not Found', 404);
    } else {
        await Hotel.deleteOne({
            _id: id
        });
    }
    res.status(200).json({
        success: true,
        data: 'Hotel Deleted'
    });
});

exports.updateHotel = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const hotel = await Hotel.findById({
        _id: id
    });
    if (!hotel) {
        throw new ErrorResponse('Hotel Not Found', 404);
    } else {
        await Hotel.findByIdAndUpdate({
            _id: id
        }, {
            ...req.body
        }, {
            runValidators: true
        });
    }
    res.status(200).json({
        success: true,
        data: req.body
    });
});