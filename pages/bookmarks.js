import React from 'react'
import { TitleSection, Card } from '../components'
import { getBookmarks } from '../notion'
import unwrapResponse from '../notion/unwrapResponse'
import parseBookmarks from '../notion/parseBookmarks'

const Bookmarks = ({ result }) => {
	console.log(result)
	return (
		<>
			<TitleSection
				heading={'bookmarks'}
				title={'Interesting articles I want to read'}
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10'>
				{result.map((el) => (
					<Card {...el} />
				))}
			</div>
		</>
	)
}

export const getServerSideProps = () => {
	return unwrapResponse(getBookmarks, parseBookmarks)
}

export default Bookmarks
