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
				{
					description: 'Many Teams, One Application',
					domanin: 'medium.com',
					image:
						'https://cdn.peekalink.io/public/images/e342eb4b-c5d4-4717-80ae-85fa64edc1fc/e2bf6845-817d-454b-9a31-377f6659320a.jpe',
					title: 'Federated Applications: E Plurbus Unum',
					url: 'https://trmidboe.medium.com/federated-applications-e-plurbus-unum-2cc7850250a0',
				},
				{
					description:
						'In this article, we want to provide a list of some free and paid resources that we loved the most in our journey to learning Rust. Rust is…',
					domanin: 'loige.co',
					image:
						'https://cdn.peekalink.io/public/images/1d7640f7-982c-48d2-af5a-f52e419f2410/cee9c322-38b3-474d-8f3a-3bf36e0b3e2f.jpg',
					title: 'Where to go to learn Rust in 2021',
					url: 'https://loige.co/where-to-go-to-learn-rust-in-2021',
				},
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
