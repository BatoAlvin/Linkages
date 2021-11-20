import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import Head from "next/head";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps,session }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>EDU MY CLASS</title>
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}

export default MyApp
