const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tsaSchema = new Schema({
    Name: String,
    Surname: String
});

module.exports = mongoose.model('tsa_collection', tsaSchema);


