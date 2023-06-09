export default class API {
	baseUrl = `${window.location.protocol}//${window.location.host}`
	//baseUrl = 'http://192.168.1.100:3000'
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
		return await fetch(`${this.baseUrl}/api/anime/${id}`)
	}

	async getAnimeList() {
		return await fetch(`${this.baseUrl}/api/anime/list`)
	}

	async getAnimeScore(id) {
		return await fetch(`${this.baseUrl}/api/anime/${id}/score`)
	}

	async getUserProfile(username) {
		return await fetch(`${this.baseUrl}/api/users/${username}`)
	}

	async getProfile(token) {
		return await fetch(`${this.baseUrl}/api/profile`, {
			headers: {
				'X-Auth-Token': token
			}
		})
	}

	async postReview(token, anime, score, text) {
		return await fetch(`${this.baseUrl}/api/anime/${anime}/review`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': token
			},
			body: JSON.stringify({ score, text })
		})
	}

	async updateReview(token, anime, score, text) {
		return await fetch(`${this.baseUrl}/api/anime/${anime}/review`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': token
			},
			body: JSON.stringify({ score, text })
		})
	}

	async getReviews(anime) {
		return await fetch(`${this.baseUrl}/api/anime/${anime}/reviews`)
	}

	async getUserList(username) {
		return await fetch(`${this.baseUrl}/api/users/${username}/list`)
	}

	async getTrailers() {
		return await fetch(`${this.baseUrl}/api/anime/trailers`)
	}

	async updatePfp(link, token) {
		return await fetch(`${this.baseUrl}/api/profile/picture`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': token
			},
			body: JSON.stringify({
				picture: link
			})
		})
	}

	async updateBanner(link, token) {
		return await fetch(`${this.baseUrl}/api/profile/banner`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': token
			},
			body: JSON.stringify({
				banner: link
			})
		})
	}

	async addToList(anime, token) {
		return await fetch(`${this.baseUrl}/api/profile/list`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': token
			},
			body: JSON.stringify({ anime })
		})
	}

	async removeFromList(anime, token) {
		return await fetch(`${this.baseUrl}/api/profile/list`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': token
			},
			body: JSON.stringify({ anime })
		})
	}

	async getProfileList(token) {
		return await fetch(`${this.baseUrl}/api/profile/list`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': token
			}
		})
	}

	async getProfileReviews(token) {
		return await fetch(`${this.baseUrl}/api/profile/reviews`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': token
			}
		})
	}

	async getUserReviews(username) {
		return await fetch(`${this.baseUrl}/api/users/${username}/reviews`)
	}
}

/*
DROP DATABASE IF EXISTS animetube;
CREATE DATABASE animetube;
USE animetube;

CREATE TABLE Anime (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	studio VARCHAR(255) NOT NULL,
	date date NOT NULL,
	description VARCHAR(2048) NOT NULL,
	cover VARCHAR(512) NOT NULL
);

CREATE TABLE User (
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(128) NOT NULL,
	token VARCHAR(2048) NOT NULL,
	banner VARCHAR(1024),
	pfp VARCHAR(1024)
);

CREATE TABLE Review (
	id INT PRIMARY KEY AUTO_INCREMENT,
	text VARCHAR(2048) NOT NULL,
	score DOUBLE NOT NULL,
	user INT,
	anime INT,
	date DATE,
	FOREIGN KEY (user) REFERENCES User(id),
	FOREIGN KEY (anime) REFERENCES Anime(id)
);

CREATE TABLE List (
	anime INT,
	FOREIGN KEY (anime) REFERENCES Anime(id),
	user INT,
	FOREIGN KEY (user) REFERENCES User(id)
);

CREATE TABLE Tag (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	anime INT,
	FOREIGN KEY (anime) REFERENCES Tag(id)
);

CREATE TABLE Episode (
	id INT PRIMARY KEY AUTO_INCREMENT,
	link VARCHAR(512) NOT NULL,
	anime INT,
	FOREIGN KEY (anime) REFERENCES Anime(id)
);

CREATE TABLE Carousel (
	trailer VARCHAR(512) NOT NULL,
	img VARCHAR(512) NOT NULL
);
*/
