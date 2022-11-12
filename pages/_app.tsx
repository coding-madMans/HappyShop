import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }: AppProps) {

  return <Layout Component={Component} pageProps={pageProps}/>
}

export default MyApp
