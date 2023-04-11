import {defineStore} from "pinia";
import api from "../api/api.js";
import _ from 'lodash';

export const useOrderStore = defineStore('orderStore',{
    state: () => ({
        data: [],
        error: null,
        ordersList: [],
        ordersHistory: [],
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
        },
        async getOrdersHistory() {
            try{
                const response = await api.accountOrderHistory()
                this.ordersHistory = response.data
            } catch (e) {
                this.error = e
                console.log(e)
            }
        }
    },
})
