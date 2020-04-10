const Router = require('express');
const {
    createUser,
} = require('../controllers/user.controller.js');

const router = Router();

// router.get('/hotels', getAllHotels);

// router.get('/hotel/:id', getHotelById);

router.post('/user', createUser);

// router.delete('/hotels/:id', deleteHotel);

// router.put('/hotels/:id', updateHotel);

module.exports = router;