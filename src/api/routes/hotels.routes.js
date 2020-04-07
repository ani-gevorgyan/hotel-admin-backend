const Router = require('express');
const {
    createHotel,
    getAllHotels,
    deleteHotel,
    updateHotel,
    getHotelById
} = require('../controllers/hotel.controllers.js');

const router = Router();

router.get('/hotels', getAllHotels);

router.get('/hotel/:id', getHotelById);

router.post('/hotel', createHotel);

router.delete('/hotels/:id', deleteHotel);

router.put('/hotels/:id', updateHotel);

module.exports = router;