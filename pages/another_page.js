import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function second_page() {
    return(
        <div>
            <Head>
                <title>Second Page</title>
            </Head>
            <main>
                <Layout />
                <h1>Second Page!</h1>
            </main>
        </div>
    )
}


