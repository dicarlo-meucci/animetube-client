<script setup>
import router from '../../router'
import StarRating from 'vue-star-rating'
import { useAnimeStore } from '../../stores/anime'
import { useAPIStore } from '../../stores/api'
import { useSessionStore } from '../../stores/session'
import { ref, onMounted } from 'vue'

const { API } = useAPIStore()
const anime = useAnimeStore()
const session = useSessionStore()

const text = ref('')
const rating = ref(0)
const iconScale = ref(6)

function clearFields() {
	text.value = ''
	rating.value = 0
}

async function getScore() {
	const result = await API.getAnimeScore(anime.id)
	if (result.ok) anime.setScore((await result.json()).score)
}

async function fetchReviews() {
	const result = await API.getReviews(anime.id)

	if (result.status != 200) {
		return
	}

	const reviews = await result.json()

	anime.setReviews(reviews)
}

async function postReview() {
	// The rating is in base 5 and the database uses base 100, so we multiply by 20 to convert it
	const result = await API.postReview(session.token, anime.id, rating.value * 20, text.value)

	if (!result.ok) {
		alert((await result.json()).error)
		return
	}

	clearFields()
	await getScore()
	await fetchReviews()
}

function getIconScale() {
	if (window.innerWidth < 410) iconScale.value = 25
	else iconScale.value = 40
}

onMounted(() => {
	getIconScale()
	window.addEventListener('resize', () => {
		getIconScale()
	})
})
</script>

<template>
	<div class="anime-panel-wrapper">
		<h1 class="text-review">Lascia una recensione</h1>
		<star-rating
			v-model:rating="rating"
			class="rating"
			:star-size="iconScale"
			:increment="0.5"
			active-color="#b844ff"
		/>
		<div class="review-controls">
			<textarea
				v-model="text"
				class="description-wrapper"
				type="text"
				placeholder="Lascia una recensione..."
			></textarea>
		</div>
		<button @click="postReview" type="submit" class="publish-button">Pubblica</button>
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
}

.description-wrapper {
	margin: 5px;
	font-size: 1rem;
	height: 100px;
	width: 100%;
	padding: 10px;
	border: 2px solid var(--text-2);
	border-radius: 20px;
	outline: none;
	background: var(--bg-3);
	color: #fff;
	resize: none;
}

.text-review {
	margin-left: 5px;
	color: var(--text-2);
}

.publish-button {
	width: 75px;
	padding: 5px;
	margin-left: auto;
	margin-right: 5px;
	border-radius: 10px;
	border: none;
	font-weight: bold;
	font-size: 1rem;
	background: var(--text-2);
	color: var(--text);
}
</style>
