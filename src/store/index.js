import { defineStore } from 'pinia'
import API from '../services/API.js'

export const useStore = defineStore('store', {
	state: () => ({
		API: new API(),
		anime: {},
		session: {}
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
			this.anime = anime
		},
		setSession(session) {
			this.session = session
			localStorage.setItem('session', this.session)
		}
	}
})
