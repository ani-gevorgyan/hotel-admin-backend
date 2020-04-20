const Hotel = require('../models/hotel.model');
const ErrorResponse = require('../../../utils/errorResponse');

class HotelService {
    async createHotel(data) {
        return Hotel.create(data);
    }

    async getActiveHotels() {
        return Hotel.find({
            status: 'active'
        });
    }

    async getHotelById(id) {
        const hotel = await Hotel.findById(id);
        if (!hotel) {
            throw new ErrorResponse('Hotel not found', 404);
        }
        return hotel;
    }

    async deleteHotel(id) {
        const hotel = await Hotel.findById(id);
        if (!hotel) {
            throw new ErrorResponse('Hotel not found', 404);
        }
        await Hotel.deleteOne({
            _id: id
        });
        return hotel;
    }

    async updateHotel(id, data) {
        let hotel = await Hotel.findById(id);
        if (!hotel) {
            throw new ErrorResponse('Hotel not found', 404);
        }
        return Hotel.findByIdAndUpdate(id, data, {
            runValidators: true,
            new: true
        });
    }
}

const hotelService = new HotelService();
module.exports = hotelService;