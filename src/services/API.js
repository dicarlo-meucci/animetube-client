export default class API {
	baseUrl = `${window.location.protocol}//${window.location.host}`

	constructor() {
		let css = 'text-shadow: 1px 1px 2px black, 0 0 1em lime, 0 0 0.2em lime; font-size: 30px;'
		console.log('%cAPI Initialized!', css)
	}

	login() {}

	logout() {}

	searchAnime(name) {
		// returns an array with the results such as
		// ["naruto","your name"...]
	}

	rateAnime(id, stars, comment) {}
}
