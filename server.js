require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const hotelRouter = require('./src/api/routes/hotels.routes');
const db = require('./src/db/db');
const config = require('./src/utils/config');
const errorHandler = require('./src/api/middleware/handleError.middleware');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(hotelRouter);
app.use((err, req, res, next) => errorHandler(err, req, res, next))
app.listen(config.server.port, () => {
    console.log(`Magic is happening on port ${config.server.port}`)
});

db();