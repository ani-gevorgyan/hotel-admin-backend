const Hotel = require('../models/hotel.model');

exports.createHotel = (req, res) => {
    const hotel = req.body;
    console.log('-------', hotel);
    const newHotel = new Hotel({
        ...hotel
    });
    newHotel.save(err => {
        if (err) {
            return res.status(500).send({
                message: 'Something went wrong'
            });
        }
        return res.status(201).send({
            message: 'Order Created'
        });
    });
}