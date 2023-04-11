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
                let response = await api.auth(form)
                localStorage.setItem('Authorization', response.data.token)
                this.token = response.data.token
                this.user = response.data.user
                this.is_auth = true
                // console.log(response.data)
            }
            catch (e) {
                this.error = e
            }
        },
        async checkingAuth() {
            try {
                let response = await api.checkAuth()
                this.token = response.data.token
                this.user = response.data.user
            }
            catch (e) {
                this.error = e
            }
        },
        async logout() {
            try {
                let response = await api.logout()
                localStorage.clear()
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
