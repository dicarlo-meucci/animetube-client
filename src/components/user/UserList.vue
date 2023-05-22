<script setup>
import { onMounted, ref } from 'vue'
import AnimeScore from '../anime/AnimeScore.vue'
import AnimeInfo from '../anime/AnimeInfo.vue'
import AnimeLikeButton from '../anime/AnimeLikeButton.vue'
import { useSessionStore } from '../../stores/session'
import { useAPIStore } from '../../stores/api'
import router from '../../router'
const { API } = useAPIStore()
const session = useSessionStore()

const props = defineProps({
	list: Array
})

async function sendToAnime(id) {
	router.push(`/anime/${id}`)
}
</script>

<template>
	<div v-if="list.length" class="user-list-wrapper">
		<div class="anime-container">
			<div class="favorite">
				<h1>Preferiti</h1>
			</div>
			<div class="anime-wrapper" @click="sendToAnime(anime.id)" v-for="anime in props.list" :key="anime.id">

				<!-- Get key-visual -->
				<div class="key-visual-wrapper">
					<img class="key-visual" :src="anime.cover" />
				</div>

				<!-- Get anime info -->
				<div class="anime-info">
					<h1>{{ anime.name }}</h1>
					<p>by {{ anime.studio }}</p>
					<p>Episodi: {{ anime.episodes }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.favorite {
	padding: 10px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	position: relative;
}

.anime-container {
	display: flex;
	flex-direction: column;
}

.user-list-wrapper {
	width: 90%;
	padding: 10px;
	display: flex;
	flex-wrap: wrap;
	border-radius: 15px;
	background: var(--bg-3);
	margin-left: auto;
	margin-right: auto;
	margin-top: 10%;
}

.anime-wrapper {
	padding: 10px;
	width: 100%;
	display: flex;
	flex-direction: row;
	border-radius: 15px;
	background: var(--bg-2);
	margin-top: 10px;
	margin-left: auto;
	margin-right: auto;
}

.anime-info {
	display: flex;
	flex-direction: column;
	padding-left: 10px;
}

.key-visual {
	width: 100px;
	object-fit: scale-down;
	border-radius: 10px;
}

.anime-info * {
	padding: 5px;
}

@media screen and (max-width: 1000px) {
	.anime-wrapper {
		width: 200px;
	}
}

@media screen and (max-width: 690px) {
	h1 {
		font-size: 20px;
	}

	.anime-wrapper {
		width: 60%;
	}

	.key-visual {
		width: 80px;
		object-fit: scale-down;
		border-radius: 10px;
	}
}

@media screen and (max-width: 690px) {
	.user-list-wrapper {
		margin-top: 20%;
	}
}
</style>
