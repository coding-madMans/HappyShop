import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { AppContextProvider } from "../components/context/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout Component={Component} pageProps={pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
