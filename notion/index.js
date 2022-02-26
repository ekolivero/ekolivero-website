import { Client } from '@notionhq/client'

const notion = new Client({
	auth: process.env.NEXT_PUBLIC_NOTION_KEY,
})

export const getBookmarks = async () => {
	return await notion.databases.query({
		database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
		page_size: 5,
	})
}
