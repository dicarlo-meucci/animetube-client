export default class API {
	//baseUrl = `${window.location.protocol}//${window.location.host}`
	baseUrl = 'http://10.22.9.11:3000'
	constructor() {
		let css = 'text-shadow: 1px 1px 2px black, 0 0 1em lime, 0 0 0.2em lime; font-size: 30px;'
		console.log('%cAPI Initialized!', css)
	}

	async register(email, username, password) {
		return await fetch(`${this.baseUrl}/api/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, username, password })
		})
	}

	async login(username, password) {
		return await fetch(`${this.baseUrl}/api/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		})
	}

	async logout(token) {
		await fetch(`${this.baseUrl}/api/auth/logout`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ token })
		})
	}

	async searchAnime(title) {
		return (
			await fetch(`${this.baseUrl}/api/anime/search`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ title })
			})
		).json()
	}

	async getAnime(id) {
		return await fetch(`${this.baseUrl}/api/anime/view/${id}`)
	}

	async getAnimeList() {
		return await fetch(`${this.baseUrl}/api/anime/list`)
	}

	async getAnimeScore(id) {
		return await fetch(`${this.baseUrl}/api/anime/score/${id}`)
	}

	async getUserProfile(username) {
		return await fetch(`${this.baseUrl}/api/user/${username}`)
	}

	rateAnime(id, stars, comment) {}
}
