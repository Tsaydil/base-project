import '../styles/globals.css';
import Layout from "../components/layout";
import {ApolloProvider} from "@apollo/client";
const {ApolloClient, InMemoryCache, useQuery} = require('@apollo/client');
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
    /*const testFunc = () => {
        console.log(pageProps);
    }*/
  return (
      <Layout>
          <ApolloProvider client={client}>
              <Component {...pageProps} />
          </ApolloProvider>
      </Layout>
  )
}

export default MyApp
