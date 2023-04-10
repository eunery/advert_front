import {defineStore} from "pinia";
import api from "@/api/api.js";
import _ from 'lodash';

export const useAuthStore = defineStore('authStore',{
    state: () => ({
        token: null,
        user: null,
        error: null,
    }),
    actions: {
        async login(form) {
            try {
                console.log('start form data')
                console.log(form.email)
                let response = await api.auth(form)
                this.token = response.data.token
                this.user = response.data.user
                console.log(response.data)
            }
            catch (e) {
                this.error = e
            }
        }
    },
    getters: {
        is_auth(state) {
            return state.token && state.user
        },

        user() {
            return this.user()
        }
    }
})
