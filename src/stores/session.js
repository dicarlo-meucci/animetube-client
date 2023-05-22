import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', {
	state: () => ({
		token: null,
		username: null,
		email: null,
		pfp: null,
		banner: null,
		list: [],
		reviews: []
	}),
	actions: {
		clearSession() {
			this.token = null
			this.username = null
			this.email = null
			this.pfp = null
			this.banner = null
			this.list = null
			this.reviews = null
			localStorage.removeItem('session')
		},
		setSession(session) {
			this.token = session.token
			this.username = session.username
			this.email = session.email
			this.pfp = session.pfp
			this.banner = session.banner
			this.list = session.list ?? []
			this.reviews = session.reviews ?? []

			this.saveSession()
		},
		saveSession() {
			localStorage.setItem(
				'session',
				JSON.stringify({
					token: this.token,
					username: this.username,
					email: this.email,
					pfp: this.pfp,
					banner: this.banner,
					list: this.list,
					reviews: this.reviews
				})
			)
		},
		loadSession() {
			if (localStorage.getItem('session')) {
				const { token, username, email, pfp, banner, list, reviews } = JSON.parse(
					localStorage.getItem('session')
				)
				this.setSession({ token, username, email, pfp, banner, list, reviews })
				this.saveSession()
			}
		},
		setToken(token) {
			this.token = token
			this.saveSession()
		},
		setUsername(username) {
			this.username = username
			this.saveSession()
		},
		setEmail(email) {
			this.email = email
			this.saveSession()
		},
		setPfp(pfp) {
			this.pfp = pfp
			this.saveSession()
		},
		setBanner(banner) {
			this.banner = banner
			this.saveSession()
		},
		setList(list) {
			this.list = list
			this.saveSession()
		},
		addToList(anime) {
			if (!this.list) this.list = []

			this.list.push(anime)
			this.saveSession()
		},
		removeFromList(anime) {
			this.list = this.list.filter((a) => a.id !== anime.id)
			this.saveSession()
		},
		setReviews(reviews) {
			this.reviews = reviews
			this.saveSession()
		}
	}
})
