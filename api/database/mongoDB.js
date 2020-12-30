const {MongoClient} = require('mongodb');

/*async function listDatabases(client) {
    let databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}*/

export async function connectToMongoDB() {
    const client = new MongoClient(process.env.DB_URI);

    try {
        await client.connect();
        return client;
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}







