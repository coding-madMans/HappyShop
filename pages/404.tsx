import type { NextPage } from 'next'
import Head from 'next/head'

const Error404: NextPage = () => {
    return <div>
        <Head>
            <title>404</title>
        </Head>
        <h1>404 Page not found</h1>
        <hr />
        <h2>Bro U took a Wrong Turn, ig...</h2>
    </div>
}

export default Error404;
