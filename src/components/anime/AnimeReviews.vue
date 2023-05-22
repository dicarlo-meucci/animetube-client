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

function sendToUser(username) {
	router.push(`/users/${username}`)
}

async function fetchReviews() {
	const result = await API.getReviews(anime.id)

	if (result.status != 200) {
		return
	}

	const reviews = await result.json()

	anime.setReviews(reviews)
}

const iconScale = ref(6)

function getIconScale() {
	if (window.innerWidth < 410) iconScale.value = 25
	else iconScale.value = 40
}

onMounted(async () => {
	getIconScale()
	window.addEventListener('resize', () => {
		getIconScale()
	})
	await fetchReviews()
})
</script>

<template>
	<div class="anime-panel-wrapper">
		<h1 class="text-review">Recensioni</h1>
		<div class="review" v-for="review in anime.reviews" :key="anime.id">
			<!-- User name -->
			<div class="review-header">
				<h1 @click="sendToUser(review.user)" class="user-format">{{ review.user }}</h1>
				<p class="date-format">
					Pubblicata il
					{{ new Date(review.date).toLocaleDateString('it') }}
					alle {{ new Date(review.date).toLocaleTimeString('it') }}
				</p>
			</div>
			<!-- User score -->
			<star-rating
				:read-only="true"
				:show-rating="false"
				active-color="#b844ff"
				:star-size="iconScale"
				:increment="0.5"
				:rating="review.score / 20"
			></star-rating>
			<!-- User review -->
			<div class="review-text-wrapper">
				<p>{{ review.text }}</p>
			</div>
			<!-- Publication date -->
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

.text-review {
	margin-left: 5px;
	color: var(--text-2);
}

.review {
	height: auto;
	display: flex;
	flex-direction: column;
	margin: 5px;
	background: var(--bg-3);
	border-radius: 20px;
	padding: 10px;
}

.review-text-wrapper {
	background: var(--bg-2);
	border-radius: 15px;
	padding: 10px;
	margin-top: 5px;
}

.review-header {
	display: flex;
	flex-direction: row;
}

.user-format {
	cursor: pointer;
	width: max-content;
	color: var(--text-2);
}

.date-format {
	margin-left: auto;
	margin-top: 5px;
	color: var(--text);
}
</style>