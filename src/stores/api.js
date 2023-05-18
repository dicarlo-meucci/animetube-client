import { defineStore } from 'pinia'
import API from '../services/API.js'

export const useAPIStore = defineStore('API', {
	state: () => ({
		webService: new API()
	}),
	getters: {
		API: (state) => state.webService
	}
})
