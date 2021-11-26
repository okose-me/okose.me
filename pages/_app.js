// pages/_app.js
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Oktay KÖSE - Software Developer</title>
                <meta name="description" content="An artificial intelligence service that simplifies your complex data and interprets it with simple expressions." />
                <link rel="icon" href="img/favicon.png"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
