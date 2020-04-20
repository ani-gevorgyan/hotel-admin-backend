const Router = require('express');
const {
    createHotel,
    getHotels,
    deleteHotel,
    updateHotel,
    getHotelById
} = require('../controllers/hotel.controller.js');
const checkAuth = require('../../../middleware/checkAuth.middleware');

const router = Router();

router.route('/').get(checkAuth, getHotels).post(checkAuth, createHotel);
router.route('/:id').get(checkAuth, getHotelById).put(checkAuth, updateHotel).delete(checkAuth, deleteHotel);

module.exports = router;