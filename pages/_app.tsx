import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'

import SiteBar from '../components/SiteBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      </Head>
      <CssBaseline />
      <SiteBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp