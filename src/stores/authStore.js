import {defineStore} from "pinia";
import api from "@/api/api.js";
import _ from 'lodash';

export const useAuthStore = defineStore('authStore',{
    state: () => ({
        is_auth: false,
        token: null,
        user: null,
        error: null,
        status: null
    }),
    actions: {
        async login(form) {
            try {
                localStorage.clear()
                let response = await api.auth(form)
                localStorage.setItem('Authorization', response.data.token)
                this.token = response.data.token
                this.user = response.data.user
                this.is_auth = true
            }
            catch (e) {
                this.error = e
            }
        },
        async reg(form) {
            try {
                localStorage.clear()
                let response = await api.register(form)
                localStorage.setItem('Authorization', response.data.token)
                this.user = response.data.user
                this.token = response.data.token
                this.is_auth = true
            } catch (e) {
                this.error = e
            }
        },
        async checkingAuth() {
            try {
                let response = await api.checkAuth()
                this.token = response.data.token
                this.user = response.data.user
                this.is_auth = true
            }
            catch (e) {
                this.is_auth = false
                this.error = e
            }
        },
        async logout() {
            try {
                let response = await api.logout()
                window.localStorage.clear()
                this.token = null
                this.user = null
                this.error = null
                this.is_auth = false
            }
            catch (e) {
                this.error = e
            }
        },
        async accountChangeSettings(form) {
            try {
                let response = await api.accountInfo(form)
            } catch (e) {
                this.error = e
            }
        },
        async acceptOrder(id) {
            try {
                let response = await api.takeOrder(id)
            } catch (e) {
                this.error = e
            }
        },
        async confirmOrderCompletion(id) {
            try {
                let response = await api.confirmOrderCompletion(id)
            } catch (e) {
                this.error = e
            }
        },
        async confirmVehicleRegistration(id) {
            try {
                let response = await api.confirmVehicleRegistration(id)
            } catch (e) {
                this.error = e
            }
        }
    },
    initialize: {

    },
    getters: {
        is_authed() {
            return this.token && this.user
        },

        getUser() {
            return this.user
        }
    }
})
