const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

const uri = process.env.DB_URI;

/*const db = mongoose.connect(uri, options);
exports.db = db;*/


module.exports = function() {
    mongoose.connect(uri, options)
        .then(() => console.log('Connected to MongoDB...'))
        .catch(err => console.log(err));
}



