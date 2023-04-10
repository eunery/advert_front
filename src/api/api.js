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


export default { orders, order, auth };
