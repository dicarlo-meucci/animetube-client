export default class API {
	//baseUrl = `${window.location.protocol}//${window.location.host}`
	baseUrl = 'http://172.24.126.75:3000'
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

	async getProfile(token) {
		return await fetch(`${this.baseUrl}/api/profile`, {
			headers: {
				'X-Auth-Token': token
			}
		})
	}

	async rateAnime(id, stars, comment) { }

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
		return await fetch(`${this.baseUrl}/api/profile/list/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': token
			},
			body: JSON.stringify({
				anime
			})
		})
	}

	async removeFromList(anime, token) {
		return await fetch(`${this.baseUrl}/api/profile/list/remove`)
	}

	async getProfileList(token) {
		return await fetch(`${this.baseUrl}/api/profile/list/view`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': token
			}
		})
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