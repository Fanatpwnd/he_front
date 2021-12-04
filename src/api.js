import axios from 'axios'
import config from "@/config"

const client = axios.create({
	baseURL: config.API_URL,
	json: false
})


export default {

    async execute(method, resource, data) {

		let reqObj = {
			method,
			url: resource,
			data
		}

		return client(reqObj).then(req => {

			return req.data

		}, err => {
			
			return err.response.data

		})

	},


    cancelable_execute(method, resource, data) {
		
		let reqObj = {
			method,
			url: resource,
			data,
		}

		const cancel_token = axios.CancelToken.source();

		let new_client = axios.create({
			baseURL: config.API_URL,
			json: true,
			cancelToken: cancel_token.token
		})


		const promise = new_client(reqObj).then(req => {

			return req.data

		}, err => {
			
			return err.response.data

		})


		return { promise, cancel_token }

	},

    getPlans() {

		return new Promise((resolve) => {
			
			this.execute('get', 'api/plans/').then((value) => {
								
				resolve(value);

			})

		})

	},

    login(login, password) {

		let data = {
			'email' : login,
			'password' : password
		}

        return new Promise((resolve) => {
			
			this.execute('post', 'api/loginByEmail', data).then((value) => {
								
				resolve(value);

			})

		})

    },

	register(login, password, password_confirmation) {

		let data = {
			'email' : login,
			'password' : password, 
			'password_confirmation' : password_confirmation
		}

        return new Promise((resolve) => {
			
			this.execute('post', 'api/registerByEmail', data).then((value) => {
								
				resolve(value);

			})

		})

    }


}