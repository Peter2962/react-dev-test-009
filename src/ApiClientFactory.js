import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_API_URL;
const accessToken = process.env.REACT_APP_TEMP_ACCESS_TOKEN;

let client = (baseUrl = null, additionalHeaders = {}) => {
	let defaultHeaders = {
		'Content-Type': 'application/json'
	};

	if ((Object.keys(additionalHeaders).length === 0) && accessToken && accessToken.length > 0) {
		defaultHeaders['authorization'] = 'Bearer ' + accessToken;
	}

	let axiosOptions = {
		baseURL: baseUrl,
		headers: {...defaultHeaders, ...additionalHeaders}
	};

	return axios.create(axiosOptions);
};

class ApiClientFactory {
	constructor(baseUrl = null) {
		if (baseUrl == null) {
			baseUrl = API_URL;
		}

		this.baseUrl = baseUrl;
	}

	get(url, requestData = {}, headers = {}, ignoreCredentials = false) {
		return client(this.baseUrl, headers, ignoreCredentials).get(url, requestData);
	}

	post(url, requestData = {}, headers = {}, ignoreCredentials = false) {
		return client(this.baseUrl, headers, ignoreCredentials).post(url, requestData);
	}

	put(url, requestData = {}, headers = {}, ignoreCredentials = false) {
		return client(this.baseUrl, headers, ignoreCredentials).put(url, requestData);
	}

	delete(url, requestData = {}, headers = {}, ignoreCredentials = false) {
		return client(this.baseUrl, headers, ignoreCredentials).delete(url, requestData);
	}
}

export { ApiClientFactory };