import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		status: '',
		token: '1',
		user : {},
        csrf : ''
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading'
		},
		auth_success(state, token, user) {
			state.status = 'success'
			state.token = token
			state.user = user
		},
		auth_error(state){
			state.status = 'error'
		},
		logout(state){
			state.status = ''
			state.token = ''
		},
	},
	actions: {

        async csrf({commit}) {

            let result = await api.csrf();

            return true;

        },

		async login({commit}, user) {

			commit('auth_request')

			let loginStatus = await api.login(user.login, user.code);

			console.log('Try login:', loginStatus)

			if ( loginStatus ) {
				
				console.log(loginStatus)

				localStorage.setItem('user', JSON.stringify(loginStatus.user))
				localStorage.setItem('token', loginStatus.token)

				commit('auth_success', loginStatus.token, loginStatus.user)

				return true

			}

			commit('auth_error')
			localStorage.removeItem('token')

			return false

		},

		async register({commit}, user) {

			commit('auth_request')

			let loginStatus = await api.register(user.login);

			console.log('Try register:', loginStatus)

			// if ( loginStatus ) {
				
			// 	console.log(loginStatus)

			// 	localStorage.setItem('user', JSON.stringify(loginStatus.user))
			// 	localStorage.setItem('token', loginStatus.token)

			// 	commit('auth_success', loginStatus.token, loginStatus.user)

			// 	return true

			// }

			// commit('auth_error')
			// localStorage.removeItem('token')

			return false

		},

		async request_code({commit}, user) {

			commit('auth_request')

			let loginStatus = await api.request_code(user.login);

			console.log('Try request:', loginStatus)

			return false

		}

		// logout({commit}){

		// 	return new Promise((resolve) => {
		// 		commit('logout')
		// 		localStorage.removeItem('token')
		// 		resolve()
		// 	})

		// }

	},
	getters : {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
	}
})
