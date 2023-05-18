<script setup>
import router from '../../router'
import StarRating from 'vue-star-rating'
import { useAnimeStore } from '../../stores/anime'
import { useAPIStore } from '../../stores/api'
import { useSessionStore } from '../../stores/session'
import { ref } from 'vue'

const { API } = useAPIStore()
const anime = useAnimeStore()
const session = useSessionStore()

const text = ref('')
const rating = ref(0)

function clearFields() {
	text.value = ''
	rating.value = 0
}

async function getScore() {
	const result = await API.getAnimeScore(anime.id)
	if (result.ok) anime.setScore((await result.json()).score)
}

async function postReview() {
	const result = await API.postReview(session.token, anime.id, rating.value, text.value)

	if (!result.ok) {
		alert((await result.json()).error)
		return
	}

	clearFields()
	await getScore()
}
</script>

<template>
	<div class="anime-panel-wrapper">
		<h1 class="text-review">Recensioni</h1>
		<star-rating class="rating" />
		<div class="review-controls" v-for="review in session.reviews" :key="anime.id">
			<p>{{ review.score }}</p>
			<p>{{ review.date }}</p>
			<p>{{ review.text }}</p>
			<p>{{ review.author }}</p>
		</div>
	</div>
</template>

<style scoped>
.anime-panel-wrapper {
	background: var(--bg-4);
	flex-direction: column;
	display: flex;
	margin-top: 20px;
	margin-right: 20px;
	border-radius: 20px;
	color: var(--text);
	padding: 20px;
}

.review-controls {
	width: 100%;
	height: 150px;
	display: flex;
	flex-direction: row;
}

.rating {
	margin: 5px;
	fill: var(--text-2);
}

.description-wrapper {
	margin: 5px;
	font-size: 1rem;
	width: auto;
	height: 100px;
	width: 100%;
	padding: 10px;
	border: 2px solid var(--text-2);
	border-radius: 20px;
	outline: none;
	background: var(--bg-3);
	color: #fff;
}

.text-review {
	margin-left: 5px;
	color: var(--text-2);
}

.publish-button {
	width: 75px;
	padding: 5px;
	margin-left: auto;
	border-radius: 10px;
	border: none;
	font-weight: bold;
	font-size: 1rem;
	background: var(--text-2);
	color: var(--text);
}
</style>
