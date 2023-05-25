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
        },
        async newVehicle(form) {
            try {
                const response = await api.createVehicle(form)
            } catch (e) {
                this.error = e
            }
        },
        async deleteVehicle(id){
            try {
                const response = await api.delVehicle(id)
                this.vehiclesList = this.vehiclesList.filter(vehicle => vehicle.id !== id);
            } catch (e){
                this.error = e
            }
        },
        async notConfirmedVehicles() {
          try {
              const response = await api.notConfirmedVehicles()
              this.vehiclesList = response.data
          } catch (e) {
              this.error = e
          }
        }
    }
})
