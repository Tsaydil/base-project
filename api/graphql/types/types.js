const {ApolloServer, gql} = require('apollo-server-express');

const types = gql`    
    type Book {
        title: String
        author: String
    } 
    
    type Product {
        id: ID,
        title: String,
        images: [Image]
    }
    
    type Image {
        id: String,
        src: String
    }
    
    type Query {
        getBooks: [Book]
        getProducts: [Product]
    }
`;

module.exports = types


