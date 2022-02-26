import { server } from '../mocks/server'
import { getServerSideProps } from '../pages/notion'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('msw works as expected', async () => {
	const { props } = await getServerSideProps()

	expect(props).toBe('erik')
})
