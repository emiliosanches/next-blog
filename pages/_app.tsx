import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link href="/styles/global.css" rel="stylesheet" />
                <title>My new cool app</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App;