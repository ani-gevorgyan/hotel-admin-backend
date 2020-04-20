const asyncHandler = require('../../../middleware/asyncHandler');
const hotelService = require('../services/hotel.service');


exports.createHotel = asyncHandler(async (req, res, next) => {
    const hotel = await hotelService.createHotel(req.body);
    res.status(201).json({
        success: true,
        data: hotel
    });
});

exports.getHotels = asyncHandler(async (req, res, next) => {
    const hotels = await hotelService.getActiveHotels();
    res.status(200).json({
        success: true,
        data: hotels
    });
});

exports.getHotelById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const hotel = await hotelService.getHotelById(id);
    res.status(200).json({
        success: true,
        data: hotel
    });
});

exports.deleteHotel = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const hotel = await hotelService.deleteHotel(id);
    res.status(200).json({
        success: true,
        data: hotel
    });
});

exports.updateHotel = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const hotel = await hotelService.updateHotel(id, req.body);
    res.status(200).json({
        success: true,
        data: hotel
    });
});