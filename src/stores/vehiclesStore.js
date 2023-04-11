import {defineStore} from "pinia";
import api from "../api/api.js";
import _ from 'lodash';

export const useVehicleStore = defineStore('vehicleStore', {
    state: () => ({
        data: [],
        error: null,
        vehiclesList: [],
        vehicle: null,
    }),
    actions: {
        async getVehicles() {
            try {
                const response = await api.accountVehicles()
                this.vehiclesList = response.data
            } catch (e) {
                this.error = e
            }
        }
    }
})
