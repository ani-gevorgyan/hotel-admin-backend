const Router = require('express');
const {
    createHotel
} = require('../handlers/hotel.handlers');

const router = Router();

router.get('/hotels', (req, res) => {
    res.send('Helyooooo');
})

// router.post('/hotel', (req, res) => {
//     const newHotel = req.body;
//     console.log(newHotel);
//     res.send({
//         newHotel
//     });
// });

router.post('/hotel', createHotel);

module.exports = router;