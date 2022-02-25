import '../styles/globals.css'
import Head from 'next/head'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
	require('../mocks')
}

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title> Erik Olivero </title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
