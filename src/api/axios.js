import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
if (localStorage.getItem('Authorization')) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Authorization')}`;
}

export default axios;
