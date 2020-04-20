const Hotel = require('../models/hotel.model');
const ErrorResponse = require('../../../utils/errorResponse');

exports.getActiveHotels = async () => {
    return await Hotel.find({
        status: 'active'
    });
}

exports.createHotel = async (data) => {
    return await Hotel.create(data);
}

exports.hotelById = async (id) => {
    const data = await Hotel.findById(id);
    if (!data) {
        throw new ErrorResponse('Hotel not found', 404);
    }
    return data;
}

exports.deleteHotel = async (id) => {
    const data = await Hotel.findById(id);
    if (!data) {
        throw new ErrorResponse('Hotel not found', 404);
    }
    await Hotel.deleteOne({
        _id: id
    });
    return data;
}

exports.updateHotel = async (id, data) => {
    const hotel = await Hotel.findById(id);
    if (!hotel) {
        throw new ErrorResponse('Hotel not found', 404);
    }
    const updated = await Hotel.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    })
    return updated;
}