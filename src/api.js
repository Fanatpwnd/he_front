import axios from 'axios'

const client = axios.create({
	baseURL: 'http://127.0.0.1:8000',
	json: true
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
			
			return {
				'error': typeof(err.response) !== 'undefined' && typeof(err.response.data) !== 'undefined' && typeof(err.response.data.message) !== 'undefined' ? err.response.data.message : ''
			}

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
			baseURL: '127.0.0.1:8000',
			json: true,
			cancelToken: cancel_token.token
		})


		const promise = new_client(reqObj).then(req => {

			return req.data

		}, err => {
			
			return {
				'error': typeof(err.response) !== 'undefined' && typeof(err.response.data) !== 'undefined' && typeof(err.response.data.message) !== 'undefined' ? err.response.data.message : ''
			}

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

    csrf() {

        return new Promise((resolve) => {
			
			axios('http://127.0.0.1:8000/sanctum/csrf-cookie', {exposedHeaders: ["set-cookie"],}).then(req => {

                console.log(req);
								
				resolve(req);

			})

		})

    },

    login(login, code, csrf) {

        return new Promise((resolve) => {
			
			this.execute('get', 'sanctum/plans/').then((value) => {
								
				resolve(value);

			})

		})

    }


}