require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const authRouter = require('./src/api/auth/routes/auth.routes');
const hotelRouter = require('./src/api/Hotel/routes/hotel.routes');
const userRouter = require('./src/api/User/routes/user.routes');
const db = require('./src/db/db');
const config = require('./src/config/config');
const errorHandler = require('./src/middleware/handleError.middleware');
var cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({  origin: 'http://localhost:3000', credentials: true}));

app.use(morgan('dev'));
app.use(cookieParser());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/users', userRouter);
app.use(errorHandler);
app.listen(config.server.port, () => {
    console.log(`Magic is happening on port ${config.server.port}`)
});

db();