import Head from 'next/head'
import Footer from '../components/Footer'
import Grid from '../components/Grid'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rádio Crazzy - Sua diversão!</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Grid />
      <Footer />
    </div>
  )
}
