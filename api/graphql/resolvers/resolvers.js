const {ApolloServer} = require('apollo-server-express');
const book_collection = require('../../models/bookModel');
const test_collection =  require('../../models/productModel');

const resolvers = {
    Query: {
        getBooks: async () => await book_collection.find({}).lean(),
        getProducts: async () => await test_collection.find({}).lean()
    }
}

module.exports = resolvers;