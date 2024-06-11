import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL, // Use the proxy prefix
});

export default apiClient;

apiClient.interceptors.request.use((request) => {
    const accessToken = "authsample"; // Replace with your token logic if needed

    if (accessToken) {
        request.headers.Authorization = `Bearer ${accessToken}`;
    } else {
        request.headers.Authorization = `Bearer GUEST`;
    }
    request.headers.Source = window.screen.width > 599 ? 'web-desktop' : 'web-mobile';
    request.withCredentials = false;
    return request;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error.response);
    }
);
