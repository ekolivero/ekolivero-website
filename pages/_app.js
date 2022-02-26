import '../styles/globals.css'
import { Layout } from '../components'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
	require('../mocks')
}

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
