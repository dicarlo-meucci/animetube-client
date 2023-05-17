import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', {
	state: () => ({
		token: null,
		username: null,
		email: null,
		pfp: null,
		banner: null,
		list: []
	}),
	actions: {
		clearSession() {
			this.token = null
			this.username = null
			this.email = null
			this.pfp = null
			this.banner = null
			this.list = null
			localStorage.removeItem('session')
		},
		setSession(session) {
			this.token = session.token
			this.username = session.username
			this.email = session.email
			this.pfp = session.pfp
			this.banner = session.banner
			this.list = session.list ?? []

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
					list: this.list
				})
			)
		},
		loadSession() {
			const { token, username, email, pfp, banner, list } = JSON.parse(localStorage.getItem('session'))
			this.setSession({ token, username, email, pfp, banner, list })
			this.saveSession()
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
		}
	}
})
