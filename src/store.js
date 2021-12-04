import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		status: '',
		token: localStorage.getItem('token') || '',
		user : {},
		errors : {},
		message: ''
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading'
			state.errors = {}
			state.message = ''
		},
		auth_success(state, payload) {
			state.status = 'success'
			state.token = payload.token
			state.user = payload.user
		},
		auth_error(state, payload){
			state.status = 'error'
			state.errors = payload.errors
			state.message = payload.message
		},
		logout(state){
			state.status = ''
			state.token = ''
		},
		clear_error(state){
			state.status = ''
			state.errors = {}
			state.message = ''
		}
	},
	actions: {

		async login({commit}, user) {

			commit('auth_request')

			let loginStatus = await api.login(user.login, user.password);

			console.log('Try login:', loginStatus)

			if ( typeof(loginStatus.token) !== 'undefined' && loginStatus.token != '' ) {
				
				console.log(loginStatus)

				localStorage.setItem('token', loginStatus.token)

				commit('auth_success', {
					token: loginStatus.token, 
					user: loginStatus.id
				})

				return true

			} else {

				
				localStorage.removeItem('token')

				commit('auth_error', {
					message: loginStatus.message, 
					errors: loginStatus.errors
				})
				
				return false
			
			}

		},

		async register({commit}, user) {

			commit('auth_request')

			let loginStatus = await api.register(user.login, user.password, user.password_confirmation);

			console.log('Try register:', loginStatus)

			if ( typeof(loginStatus.token) !== 'undefined' && loginStatus.token != '' ) {
				
				console.log(loginStatus)

				localStorage.setItem('token', loginStatus.token)

				commit('auth_success', {
					token: loginStatus.token, 
					user: loginStatus.id
				})

				return true

			} else {

				localStorage.removeItem('token')

				commit('auth_error', {
					message: loginStatus.message, 
					errors: loginStatus.errors
				})
				
				return false
			
			}

		},


		logout({commit}){

			return new Promise((resolve) => {
				commit('logout')
				localStorage.removeItem('token')
				resolve()
			})

		},

		clear_error({commit}) {
			
			commit('clear_error')

		}

	},
	getters : {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
		errors: state => state.errors,
		error_message: state => state.message
	}
})
