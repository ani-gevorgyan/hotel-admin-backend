const mongoose = require('mongoose');
const config = require('../utils/config');

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