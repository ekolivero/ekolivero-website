let res = {
	error: false,
	result: [],
	errorMessage: '',
}

async function unwrapResponse(request, parser) {
	try {
		const response = await request()
		return {
			props: {
				...res,
				result: parser(response),
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
