import '../styles/swipper.min.css'
import '../utils/swipper'
import '../utils/scrollup'
import '../styles/globals.scss'
import Head from 'next/head'

function Mantenar({ Component, pageProps }) {
  return (
    <>
      <Head> <title>{'Mantenar'}</title> </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Mantenar
