import Head from 'next/head'
import {HomeComponent} from '../components/HomeComponent';

export default function Home() {
  return (
    <>
      <Head>
        <title>sors.software - bespoke software development</title>
        <meta name="description" content="Software developers experienced in working with biggest global brands" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14191c" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeComponent />
    </>
  )
}
