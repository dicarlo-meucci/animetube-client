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
		async setSession(session) {
			const profile = await (await this.API.getProfile(session.token)).json()

			this.session = {
				token: session.token,
				username: profile.username,
				email: profile.email,
				pfp: profile.pfp,
				banner: profile.banner,
			}

			localStorage.setItem('session', JSON.stringify(this.session))
		}
	}
})
