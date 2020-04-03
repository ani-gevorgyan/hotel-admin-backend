const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/hotelApp', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Database connected.');
// })

const URL = 'mongodb://localhost:27017/hotelApp'

module.exports = (server) => {
    mongoose.connect(
        URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        },
        () => {
            server
            console.log('Database connected');
        }
    )
}