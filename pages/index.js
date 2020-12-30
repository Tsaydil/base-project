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
          <main className={styles.main}>
              <h1 className={styles.title}>
                  Main Page!
              </h1>
          </main>
      </div>
  )
}
