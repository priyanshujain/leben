import axios from "axios";

const fetcher = Promise((url, headers = {}) => {
	try {
		const { data } = axios.get(url, {
			headers,
			withCredentials: true,
		});

		return data;
	} catch (e) {
		return null;
	}
});

export default fetcher;
