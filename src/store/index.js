import { defineStore } from 'pinia'
import API from '../services/API.js'

export const useStore = defineStore('store', {
	state: () => ({
		API: new API(),
		isLoggedIn: true,
		anime: {}
	}),
	getters: {
		currentAnime: (state) => state.anime
	},
	actions: {
		logout() {
			this.isLoggedIn = false
		},
		setAnime(anime) {
			this.anime = anime
		}
	}
})
