import {defineStore} from "pinia";
import api from "../api/api.js";
import _ from 'lodash';
import orderList from "../components/pages/OrderList.vue";
import order from "../views/Order.vue";

export const useOrderStore = defineStore('orderStore',{
    state: () => ({
        data: [],
        error: null,
        ordersList: [],
        order: null
    }),
    actions: {
        async getOrders(){
            try{
                const response = await api.orders()
                this.ordersList = response.data
            }
            catch(e){
                this.error = e;
            }
        },
        async getOrder(id){
            try {
                const response = await api.order(id)
                this.order = response.data
            }
            catch (e) {
                this.error = e;
            }
        }
    },
})
