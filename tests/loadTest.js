//TODO: Improve load tests using k6

import http from 'k6/http'
import { check, group, sleep } from 'k6'

export const options = {
	vus: 100,
	iterations: 100,
}

const SLEEP_DURATION = 0.2

export default function () {
	group('simple user journey', () => {
		// Login request

		const notionResponse = http.get('http://localhost:3000/notion')

		check(notionResponse, {
			'is status 200': (r) => r.status === 200,
		})
		sleep(SLEEP_DURATION)
	})
}
