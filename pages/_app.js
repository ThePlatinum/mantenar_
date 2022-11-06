import '../styles/swipper.min.css'
import '../utils/swipper'
import '../utils/scrollup'
import '../styles/globals.scss'
import Head from 'next/head'

function Mantenar({ Component, pageProps }) {
  return (
    <>
      <Head> 
        <title>{'Mantenar'}</title>
        <meta name="author" content="Emmanuel Adesina"></meta>
        <meta name="description" content="Software  to keep organization file share secure and unbounded"></meta>
        <link rel="apple-touch-icon" href="/asset/mantenar.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Mantenar
