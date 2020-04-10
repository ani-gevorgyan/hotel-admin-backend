const Router = require('express');
const {
    createHotel,
    getHotels,
    deleteHotel,
    updateHotel,
    getHotelById
} = require('../controllers/hotel.controller.js');

const router = Router();

router.route('/').get(getHotels).post(createHotel);
router.route('/:id').get(getHotelById).put(updateHotel).delete(deleteHotel);

module.exports = router;