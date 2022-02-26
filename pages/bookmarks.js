import React from 'react'
import { getBookmarks } from '../notion'
import unwrapResponse from '../notion/unwrapResponse'
import parseBookmarks from '../notion/parseBookmarks'

const Bookmarks = (props) => {
	console.log(props)
	return <h1> Hello </h1>
}

export const getServerSideProps = () => {
	return unwrapResponse(getBookmarks, parseBookmarks)
}

export default Bookmarks
