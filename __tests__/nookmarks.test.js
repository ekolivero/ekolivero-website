import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { server } from '../mocks/server'
import { getServerSideProps } from '../pages/bookmarks'
import Notion from '../pages/bookmarks'
import Bookmark from '../components/Bookmark'

describe('Bookmarks page', () => {
	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

	it('getServerSideProps works as expected', async () => {
		const { props } = await getServerSideProps()

		expect(props).toEqual({
			error: false,
			errorMessage: '',
			result: [
				{ description: 'This guide to learn react', title: 'Learn React' },
				{ description: 'Lean postgres', title: 'Postgresql' },
			],
		})
	})

	it('Should render bookmarks component', async () => {
		const { props } = await getServerSideProps()

		render(<Notion {...props} />)

		await waitFor(() => screen.getAllByRole('heading'))

		const items = screen.getAllByRole('heading')

		expect(items.length).toBe(2)
	})

	it('Should render Bookmark component', async () => {
		const props = {
			title: 'Antonio',
			description: 'cipolla',
		}

		render(<Bookmark {...props} />)

		await waitFor(() => screen.getByRole('heading'))

		expect(screen.getByRole('heading').textContent).toBe('Antonio')
	})
})
