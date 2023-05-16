import { defineStore } from 'pinia'
import API from '../services/API.js'

export const useStore = defineStore('store', {
	state: () => ({
		API: new API(),
		anime: {},
		session: JSON.parse(localStorage.getItem('session')) ?? {}
	}),
	getters: {
		currentAnime: (state) => state.anime
	},
	actions: {
		logout() {
			this.session = {}
			localStorage.removeItem('session')
		},
		setAnime(anime) {
			this.anime = anime
		},
		setSession(session) {
			this.session = session
			localStorage.setItem('session', JSON.stringify(this.session))
		},
		updateSession(key, value) {
			this.session[key] = value
			localStorage.setItem('session', JSON.stringify(this.session))
		}
	}
})
