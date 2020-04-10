const User = require('../models/user.model');

exports.createUser = async (req, res, next) => {
    const data = req.body;
    const newUser = new User({
        ...data
    });
    await newUser.save(err => {
        if (err) {
            return next(err);
        }
        return res.status(201).json({
            message: 'User Created',
            user: newUser
        });
    });
}

// exports.getAllHotels = async (req, res, next) => {
//     const hotels = await Hotel.find({}, (err, hotels) => {
//         if (hotels.length === 0) {
//             return next(err);
//         }
//     });
//     return res.status(200).json({
//         hotels,
//         message: 'Loaded'
//     });
// }

// exports.getHotelById = async (req, res, next) => {
//     const _id = req.params.id;
//     const hotel = await Hotel.findById(
//         _id, (err) => {
//             if (err) {
//                 return next(err);
//             }
//         })

//     return res.status(200).json(hotel);
// }

// exports.deleteHotel = async (req, res, next) => {
//     const _id = req.params.id;
//     await Hotel.deleteOne({
//         _id
//     }, (err) => {
//         if (err) {
//             return next(err)
//         }
//     })
//     return res.status(200).json({
//         message: 'Hotel Deleted'
//     })
// }

// exports.updateHotel = async (req, res, next) => {
//     const _id = req.params.id;
//     await Hotel.findByIdAndUpdate(_id, {
//         ...req.body
//     }, {
//         runValidators: true
//     }, (err) => {
//         if (err) {
//             return next(err);
//         }
//     });

//     return res.status(200).json({
//         data: req.body,
//         message: 'Updated Successfully'
//     })
// }