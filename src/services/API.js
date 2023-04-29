export default class API {
	//baseUrl = `${window.location.protocol}//${window.location.host}`
	baseUrl = 'http://localhost:3000'
	constructor() {
		let css = 'text-shadow: 1px 1px 2px black, 0 0 1em lime, 0 0 0.2em lime; font-size: 30px;'
		console.log('%cAPI Initialized!', css)
	}

	login() {}

	logout() {}

	async searchAnime(title) {
		return (await fetch(`${this.baseUrl}/api/anime/search`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({title})
		})).json()
	}
	
	async getAnime(id) {
		return (await fetch(`${this.baseUrl}/api/anime/view/${id}`)).json()
	}

	rateAnime(id, stars, comment) {}
}
