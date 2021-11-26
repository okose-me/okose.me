// pages/_app.js
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Oktay KÖSE - Software Developer</title>
                <meta name="description" content="I share everything I learned new in this mini blog." />
                <link rel="icon" href="img/favicon.png"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
