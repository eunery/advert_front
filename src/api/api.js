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
const register = (form) => {
    return axios.post(`/api/register`, form,{
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

const createVehicle = (form) => {
    return axios.post(`/api/profile/vehicles`, form,{
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
}

const delVehicle = (id) => {
    return axios.delete(`/api/profile/vehicles/${id}`)
}

const takeOrder = (id) => {
    return axios.post(`/api/orders/${id}`)
}

const notConfirmedOrders = () => {
    return axios.get(`/api/admin/notConfirmedOrders`)
}

const notConfirmedVehicles = () => {
    return axios.get(`/api/admin/notConfirmedVehicles`)
}

const confirmOrderCompletion = (id) => {
    return axios.post(`/api/admin/confirmOrder/${id}`)
}

const confirmVehicleRegistration = (id) => {
    return axios.post(`/api/admin/confirmVehicle/${id}`)
}

export default {
    orders, order, auth, register, logout,
    checkAuth, accountInfo, accountOrderHistory, accountVehicles,
    takeOrder, createVehicle, delVehicle, notConfirmedOrders,
    notConfirmedVehicles, confirmOrderCompletion, confirmVehicleRegistration,
};
