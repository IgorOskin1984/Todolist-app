import axios from "axios";

const axiosInstance = axios.create({
	baseURL: 'https://api.github.com/repos/',
	withCredentials: false,
	headers: {}
})

export const getTasksAPI = (repoOwner, repoName) => {
	return axiosInstance.get(`${repoOwner}/${repoName}/issues`)
		.then(response => {
			return response = response.data
		})
}