import { defineStore } from 'pinia'
import API from '../services/API.js'

export const useStore = defineStore('store', {
	state: () => ({
		API: new API(),
		anime: {},
		session: {
			username: 'balls'
		}
	}),
	getters: {
		currentAnime: (state) => state.anime
	},
	actions: {
		logout() {
			this.session = {}
			localStorage.setItem('session', this.session)
		},
		setAnime(anime) {
			console.log(anime)
			this.anime = anime
		},
		setSession(session) {
			this.session = session
			localStorage.setItem('session', this.session)
		}
	}
})
