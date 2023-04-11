import axios from "@/api/axios";

const orders = () => {
    return axios.get(`/api/orders`)
}

const order = (id) => {
    return axios.get(`/api/orders/${id}`);
}

const auth = (form) => {
    return axios.post(`/api/login`, form,{
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
}
const logout = () => {
    return axios.post('/api/logout', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('Authorization')
        }
    })
}

const checkAuth = () => {
    return axios.post('/api/auth')
}

const accountInfo = (form) => {
    return axios.put(`/api/profile`, form)
}

const accountOrderHistory = () => {
    return axios.post(`/api/profile/history`)
}

const accountVehicles = () => {
    return axios.get(`/api/profile/vehicles`)
}


export default {
    orders, order, auth, logout, checkAuth, accountInfo, accountOrderHistory, accountVehicles
};
