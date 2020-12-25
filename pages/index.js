import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout.js'
import Link from "next/link"

export default function Home() {
  return (
    <div>
        <Head>
            <title>Base Project</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout />
        <main className={styles.main}>
            <h1 className={styles.title}>
                TSA Test!
            </h1>
            <Link href='/another_page' >
                  <a className={styles.a}>Second Page</a>
            </Link>
        </main>
    </div>
  )
}
