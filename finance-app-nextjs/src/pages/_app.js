import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <noscript id="__next_css__DO_NOT_USE__"></noscript>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
