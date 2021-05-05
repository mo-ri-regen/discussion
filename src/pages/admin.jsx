import '/'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import { Header } from '../components/header'

export default function Admin({ Component, pageProps }) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>パネルディスカッション</title>
        <link rel="icon" href="/it-kingdom.png" />
      </Head>

      <Header />

      <main className={styles.main}></main>
    </div>
    // return <Component {...pageProps} />
  );
}
