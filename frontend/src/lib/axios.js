import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://linkedin-dl5a.onrender.com/api/v1",
	withCredentials: true,
});
