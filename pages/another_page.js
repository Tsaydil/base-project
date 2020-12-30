import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
const mongoose = require('mongoose');
//const test_collection = require('../api/models/productModel');
//const tsa_collection = require('../api/models/tsaModel');
import TsaCollection from '../api/models/tsaModel';
import {compileNonPath} from "next/dist/next-server/lib/router/utils/prepare-destination";





/*mongoose.connect(process.env.MONGODB_URI, (err,client) => {
    if(err) throw err;

    let databasesList = client.db().admin().listDatabases();
    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
})*/

/*async function getAll() {
    airbnbModel.findOne({}, (err, airbnb) => {
        if (err) return handleError(err);
        console.log("%s %s", airbnb.name, airbnb.summary);
    });
}*/

/*const getName = async () => {
    const test = await tsa_collection.find({});
    return test[0].title;
}*/



const second_page = ({users}) => {
    //console.log(getName());
    return(
        <div>
            <head>
                <title>Another Page</title>
            </head>
            <main>
                <h1>Second Page!</h1>
                {users.map((user) => (
                    <div>
                        <p>{user.Name}</p>
                        <p>{user.Surname}</p>
                    </div>
                ))}
            </main>
        </div>
    )
}

export async function getServerSideProps() {
    const users = await TsaCollection.find({});
    return {props: {users: users}}
}

export default second_page;


