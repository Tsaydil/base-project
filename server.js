const express = require('express');
const next = require('next');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

//const mongoDB = require('./pages/api/database/mongoDB');
//import main from './pages/api/database/mongoDB';
//import { connectToMongoDB } from './pages/api/database/mongoDB';
//const connectToMongoDB = require('./pages/api/database/mongoDB');
const connectDB = require('./api/database/mongoDB3');
//const test_collection = require('./api/models/productModel');

connectDB();

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



//main().catch(console.error);

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

/*const func = async () => {
    //const test = await tsa_collection.find({});
    //console.log('test', test);

    /!*let new_obj = new tsa_collection({Name: 'Taha Samet', Surname: 'Aydil'})
    await new_obj.save();
    console.log(new_obj);*!/
}
func();*/

app.prepare()
    .then(() => {
        const server = express()

        server.get('*', (req,res) => {
            return handle(req, res);
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })


