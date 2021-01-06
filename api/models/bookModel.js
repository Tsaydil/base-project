const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String
});

module.exports =  book_collection = mongoose.model('book_collection', bookSchema);


