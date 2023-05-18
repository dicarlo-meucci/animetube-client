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

async function sendToAnime(id) {
	router.push(`/anime/view/${id}`)
}

async function getList() {
	const result = await API.getProfileList(session.token)

	if (!result.ok) return

	const list = await result.json()
	session.setList(list)
}

onMounted(async () => {
	await getList()
})
</script>

<template>
	<div class="user-list-wrapper">
		<h1>Preferiti</h1>
		<div class="anime-wrapper" @click="sendToAnime(anime.id)" v-for="anime in session.list" :key="anime.id">
			<div class="key-visual-wrapper">
				<img class="key-visual" :src="anime.cover" />
			</div>
			<div class="anime-info">
				<h1>{{ anime.name }}</h1>
				<p>by {{ anime.studio }}</p>
				<p>Episodi: {{ anime.episodes }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.user-list-wrapper {
	padding: 10px;
	width: max-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 15px;
	background: var(--bg-3);
	margin-left: auto;
	margin-right: auto;
	margin-top: 10%;
}
.anime-wrapper {
	padding: 10px;
	width: max;
	display: flex;
	flex-direction: row;
	border-radius: 15px;
	background: var(--bg-2);
	margin-top: 10px;
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
@media screen and (max-width: 690px) {
	h1 {
		font-size: 20px;
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
