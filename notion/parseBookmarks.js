//TODO: Improve unwrap and parse for bookmarks requests
function parseBookmarks(response) {
	const { results } = response

	return results.reduce((acc, value) => {
		if (value.properties.description.rich_text.length > 0) {
			const element = value.properties
			const tags = element.tags.multi_select.map(({ name }) => name)

			return [
				...acc,
				{
					title: element.title.title[0].plain_text,
					description: element.description.rich_text[0].plain_text,
					domain: element.domain.url,
					url: element.url.url,
					image: element.image.url,
					tags: tags,
				},
			]
		}

		return acc
	}, [])
}

export default parseBookmarks
