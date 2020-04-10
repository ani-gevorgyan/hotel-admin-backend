require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const hotelRouter = require('./src/api/Hotel/routes/hotel.routes');
const userRouter = require('./src/api/User/routes/user.routes');
const db = require('./src/db/db');
const config = require('./src/api/config/config');
const errorHandler = require('./src/api/Hotel/middleware/handleError.middleware');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/users', userRouter);
app.use(errorHandler)
app.listen(config.server.port, () => {
    console.log(`Magic is happening on port ${config.server.port}`)
});

db();