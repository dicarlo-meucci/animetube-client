import { defineStore } from 'pinia'

export const useAnimeStore = defineStore('anime', {
	state: () => ({
		id: null,
		name: null,
		studio: null,
		description: null,
		date: null,
		score: null,
		cover: null,
		episodes: [],
		tags: [],
		reviews: [],
		ownReview: null
	}),
	actions: {
		clearAnime() {
			this.id = null
			this.name = null
			this.studio = null
			this.description = null
			this.date = null
			this.score = null
			this.cover = null
			this.episodes = []
			this.tags = []
			this.reviews = []
			this.ownReview = null
		},
		setAnime(anime) {
			this.id = anime.id
			this.name = anime.name
			this.studio = anime.studio
			this.description = anime.description
			this.date = anime.date
			this.score = anime.score
			this.cover = anime.cover
			this.episodes = anime.episodes ?? []
			this.tags = anime.tags ?? []
			this.reviews = anime.reviews ?? []
			this.ownReview = anime.ownReview
		},
		setId(id) {
			this.id = id
		},
		setName(name) {
			this.name = name
		},
		setDescription(description) {
			this.description = description
		},
		setDate(date) {
			this.date = date
		},
		setTags(tags) {
			this.tags = tags
		},
		setStudio(studio) {
			this.studio = studio
		},
		setScore(score) {
			this.score = score
		},
		setCover(cover) {
			this.cover = cover
		},
		setEpisodes(episodes) {
			this.episodes = episodes
		},
		setReviews(reviews) {
			this.reviews = reviews
		},
		addToReviews(review) {
			this.reviews.push(review)
		},
		setOwnReview(review) { 
			this.ownReview = review
		}
	}
})
