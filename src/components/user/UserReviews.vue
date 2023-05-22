<script setup>
import router from '../../router'
import StarRating from 'vue-star-rating'
import { ref, onMounted } from 'vue'

const props = defineProps({
	reviews: Array
})

const iconScale = ref(6)

function getIconScale() {
	if (window.innerWidth < 410) iconScale.value = 25
	else iconScale.value = 40
}

function sendToAnime(id) {
	router.push(`/anime/${id}`)
}

onMounted(async () => {
	getIconScale()
	window.addEventListener('resize', () => {
		getIconScale()
	})
})
</script>

<template>
	<div class="reviews-wrapper">
		<h1 class="reviews-header">Recensioni</h1>
		<div class="review" v-for="review in props.reviews">
			<div class="review-header">
				<h1 @click="sendToAnime(review.anime.id)" class="anime-name-format">{{ review.anime.name }}</h1>
				<p class="date-format">
					{{ new Date(review.date).toLocaleTimeString('it', { hour: 'numeric', minute: 'numeric' }) }}
					-
					{{ new Date(review.date).toLocaleDateString('it') }}
				</p>
			</div>
			<star-rating
				:read-only="true"
				:show-rating="false"
				active-color="#b844ff"
				:star-size="iconScale"
				:increment="0.5"
				:rating="review.score / 20"
			></star-rating>
			<div class="review-text-wrapper">
				<p>{{ review.text }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.reviews-wrapper {
	width: 100%;
	background: var(--bg-3);
	flex-direction: column;
	display: flex;
	margin-top: 20px;
	margin-right: 20px;
	border-radius: 20px;
	color: var(--text);
	padding: 10px;
}

.reviews-header {
	padding: 10px;
}

.review {
	height: auto;
	display: flex;
	flex-direction: column;
	margin: 5px;
	background: var(--bg-2);
	border-radius: 20px;
	padding: 10px;
}

.review-text-wrapper {
	background: var(--bg);
	border-radius: 15px;
	padding: 10px;
	margin-top: 5px;
}

.review-header {
	display: flex;
	flex-direction: row;
}

.anime-name-format {
	cursor: pointer;
	width: max-content;
}

.date-format {
	margin-left: auto;
	margin-top: 5px;
	color: var(--text);
}
</style>
