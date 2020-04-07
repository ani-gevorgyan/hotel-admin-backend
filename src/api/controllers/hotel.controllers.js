const Hotel = require('../models/hotel.model');

exports.createHotel = async (req, res) => {
    const data = req.body;
    console.log('-------', data);
    const newHotel = new Hotel({
        ...data
    });
    console.log('+++++++', newHotel);
    await newHotel.save(err => {
        if (err) {
            return res.status(500).json({
                message: 'Something went wrong'
            });
        }
        return res.status(201).json({
            message: 'Hotel Created',
            hotel: newHotel
        });
    });
}

exports.getAllHotels = async (req, res) => {
    const hotels = await Hotel.find({});
    return res.status(200).json(hotels);
}

exports.getHotelById = async (req, res) => {
    const hotel = await Hotel.findById({
        _id: req.params.id
    });
    return res.status(200).json(hotel);
}

exports.deleteHotel = async (req, res) => {
    await Hotel.deleteOne({
            _id: req.params.id
        })
        .catch(e => console.log(e))
    return res.status(200).json({
        message: 'Hotel Deleted'
    })
}

exports.updateHotel = async (req, res) => {
    const _id = req.params.id;
    await Hotel.findByIdAndUpdate(_id, {
        ...req.body
    });
    return res.status(200).json({
        message: req.body
    })
}