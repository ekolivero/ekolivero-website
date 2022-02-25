import React from 'react'
import { getBookmarks } from '../notion'
import unwrapResponse from '../notion/unwrapResponse'

const Notion = ({ result, error }) => {
	console.log(result, error)
	return <h1> Hello </h1>
}

export const getServerSideProps = () => {
	return unwrapResponse(getBookmarks)
}

export default Notion
