const express = require('express');
const hotelRouter = require('./src/api/routes/hotels.routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./src/db/db');

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(hotelRouter);

const server = app.listen(PORT, () => {
    console.log(`Magic is happening on port ${PORT}`)
});

db(server);