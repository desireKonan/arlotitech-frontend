import axios from 'axios';

//console.log(process.env.REACT_APP_URL);

const axiosServices = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

// interceptor for http
axiosServices.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);

export default axiosServices;
