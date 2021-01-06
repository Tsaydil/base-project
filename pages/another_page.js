import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/another_page.module.css'
import {compileNonPath} from "next/dist/next-server/lib/router/utils/prepare-destination";
import {useQuery, gql} from "@apollo/client";
import Swiper from '../components/swiper/swiper';



const GET_BOOKS = gql`
    query GetBooks{
        getBooks {
            title
            author
        }    
    }
`;

const get_products = gql`
    query GetProducts {
        getProducts {
            id
            title
            images {
                src
            }
        }
    }
`;



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



const second_page = ({products}) => {
    //let test = console.log(products[1].body_html);
    //console.log(typeof products[0].images[0].id);
    //console.log(getName());
    function TestClientFunc() {
        const {loading, error, data} = useQuery(get_products);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error! {error.message}</p>;

        return (
            <div>
                <Swiper products={data.getProducts} />
            </div>
        )

        /*return data.getProducts.map((Product) => (
            <div key={Product.id}>
                <h2>{Product.title}</h2>
                {/!*<p>{Product.images[0].src}</p>*!/}
                {Product.images[0] ? <img className={styles.img_style} src={Product.images[0].src} /> : <p>"No Image!"</p>}
                {/!*<img src={Product.images[0].src} />*!/}
            </div>
        ))*/
    }
    return(
        <div>
            <head>
                <title>Another Page</title>
            </head>
            <main>
                <h1>Second Page!</h1>

                <TestClientFunc />
                {/*<ApolloProvider client={client}>
                    <div>
                        <p>Test Apollo client</p>
                    </div>
                </ApolloProvider>*/}
                {/*{products.map((product) => (
                    <div key={product._id}>
                        <h2>{product.title}</h2>
                        <p>{products[0].images[0].src}</p>
                        {product.images[0] ? <img className={styles.img_style} src={product.images[0].src} /> : <p>"No Image!"</p>}
                        <img src={product.images[0].src} />
                    </div>
                ))}*/}
            </main>
        </div>
    )
}

/*export async function getServerSideProps() {
    // const users = await TsaCollection.find({});
    const config = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(payload) // body data type must match "Content-Type" header
    };

    // users should be: { users: [userdata]}
    const products = await fetch('http://localhost:3000/api_another_page', config).then(res => res.json());
    //console.log('users', users);

    //const books = await fetch('http://localhost:3000/api_test', config).then(res => res.json());

    return {props: {products: products.products}}

}*/

export default second_page;


