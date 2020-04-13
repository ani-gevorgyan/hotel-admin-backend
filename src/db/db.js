const mongoose = require('mongoose');
const config = require('../config/config');

const URL = config.db.url;

module.exports = () => {
    mongoose.connect(
        URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        },
        () => {
            console.log('Database connected');
        }
    )
}