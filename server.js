require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const hotelRouter = require('./src/api/routes/hotels.routes');
const db = require('./src/db/db');
const config = require('./src/utils/config')

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(hotelRouter);

app.listen(config.server.port, () => {
    console.log(`Magic is happening on port ${config.server.port}`)
});

db();