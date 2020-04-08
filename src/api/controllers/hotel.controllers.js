const Hotel = require('../models/hotel.model');

exports.createHotel = async (req, res, next) => {
    const data = req.body;
    const newHotel = new Hotel({
        ...data
    });
    await newHotel.save(err => {
        if (err) {
            return next(err);
        }
        return res.status(201).json({
            message: 'Hotel Created',
            hotel: newHotel
        });
    });
}

exports.getAllHotels = async (req, res, next) => {
    const hotels = await Hotel.find({}, (err, hotels) => {
        if (hotels.length === 0) {
            return next(err);
        }
    });
    return res.status(200).json(hotels);
}

exports.getHotelById = async (req, res, next) => {
    const _id = req.params.id;
    const hotel = await Hotel.findById(
        _id, (err) => {
            if (err) {
                return next(err);
            }
        })

    return res.status(200).json(hotel);
}

exports.deleteHotel = async (req, res, next) => {
    const _id = req.params.id;
    await Hotel.deleteOne({
        _id
    }, (err) => {
        if (err) {
            return next(err)
        }
    })
    return res.status(200).json({
        message: 'Hotel Deleted'
    })
}

exports.updateHotel = async (req, res, next) => {
    const _id = req.params.id;
    await Hotel.findByIdAndUpdate(_id, {
        ...req.body
    }, {
        runValidators: true
    }, (err) => {
        if (err) {
            return next(err);
        }
    });

    return res.status(200).json({
        message: req.body
    })
}