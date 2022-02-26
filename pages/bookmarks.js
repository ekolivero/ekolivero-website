import React from 'react'
import { getBookmarks } from '../notion'
import unwrapResponse from '../notion/unwrapResponse'
import Bookmark from '../components/Bookmark'

const Bookmarks = ({ result }) => {
	return result.map((props, key) => <Bookmark {...props} key={key} />)
}

export const getServerSideProps = () => {
	return unwrapResponse(getBookmarks)
}

export default Bookmarks
