const express = require('express');
const next = require('next');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const {ApolloServer} = require('apollo-server-express');
//const {typeDefs, resolvers} = require('./schema');
const typeDefs = require('./api/graphql/types/types')
const resolvers = require('./api/graphql/resolvers/resolvers')



//const mongoDB = require('./pages/api/database/mongoDB');
//import main from './pages/api/database/mongoDB';
//import { connectToMongoDB } from './pages/api/database/mongoDB';
const connectDB = require('./api/database/mongoDB3');

connectDB();


const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const server = express();

/*const book_collection = require('./api/models/bookModel');
server.get('/api_test', async (req, res) => {
    const books = await book_collection.find({});
    res.send({books})
});*/

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});
apolloServer.applyMiddleware({app: server, path: "/graphql"})


//module.exports = client

/*
client.query({
    query: gql`
        query books {
            rates(currency: "USD") {
                currency
            }
        }
    `
}).then(result => console.log(result));
*/

/*const importJSON = async () => {
    const productsObj = require('./products.json').products;
    let i = 0;
    /!*let new_obj = new test_collection;
    let new_obj1 = Object.assign(new_obj, productsObj[0]);
    let new_obj2 = await new_obj1.save();*!/
    //console.log(new_obj1);
    //let new_obj2 = await productsObj[i].save();

    const test = await test_collection.find({});


    //console.log('test', test);

    /!*while (productsObj[i]){                           Used this for JSON Import to MongoDB Atlas
        //let new_obj = await productsObj[i].save();
        let new_obj = new test_collection;
        let new_obj1 = Object.assign(new_obj, productsObj[i]);
        let new_obj2 = await new_obj1.save();
        i++;
    }*!/
}*/
//importJSON();




// controller/API
/*const test_collection = require('./api/models/productModel');
server.get('/api_another_page', async (req, res) => {
    const products = await test_collection.find({});
    res.send({products});
});*/



app.prepare()
    .then(() => {

        server.get('*', (req,res) => {
            return handle(req, res);
        })

        server.listen(process.env.PORT || 5000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:5000')
        })

        /*server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:5000')
        })*/
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })


