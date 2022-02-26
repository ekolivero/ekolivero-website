import { rest } from 'msw'
import bookmarksMocked from './data/bookmarks.json'

const notionAPI = 'https://api.notion.com/v1'

export const handlers = [
	rest.post(`${notionAPI}/databases/:databaseId/query`, (req, res, ctx) => {
		return res(
			ctx.json({
				...bookmarksMocked,
			})
		)
	}),
]
