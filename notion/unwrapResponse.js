let res = {
	error: false,
	result: [],
	errorMessage: '',
}

function parseResponse(response) {
	const { results } = response

	return results.reduce((acc, value) => {
		let description
		let title

		if (value.properties.Description.rich_text.length > 0) {
			title = value.properties.Title.title[0].plain_text
			description = value.properties.Description.rich_text[0].plain_text

			return [
				...acc,
				{
					title,
					description,
				},
			]
		}

		return acc
	}, [])
}

async function unwrapResponse(request) {
	try {
		const response = await request()
		return {
			props: {
				...res,
				result: parseResponse(response),
			},
		}
	} catch (err) {
		return {
			props: {
				...res,
				error: true,
				errorMessage: err.message,
			},
		}
	}
}

export default unwrapResponse
