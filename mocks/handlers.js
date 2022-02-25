import { rest } from 'msw'
import bookmarksMocked from './data/bookmarks.json'

export const handlers = [
	rest.post(
		'https://api.notion.com/v1/databases/6d0d3e5ff52f434893f9865e9fb2fe6a/query',
		(req, res, ctx) => {
			return res(
				ctx.json({
					...bookmarksMocked,
				})
			)
		}
	),
]
