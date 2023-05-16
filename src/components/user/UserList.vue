<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from '../../store'
import AnimeScore from '../anime/AnimeScore.vue'
import AnimeInfo from '../anime/AnimeInfo.vue'
import AnimeLikeButton from '../anime/AnimeLikeButton.vue'
const store = useStore()
const list = ref()

async function sendToAnime(id) {
	router.push(`/anime/view/${id}`)
}

async function getList() {
	list.value = await (await store.API.getProfileList(store.session.token)).json()
	store.updateSession('list', list.value)
}

onMounted(async () => {
	await getList()
})
</script>

<template>
	<div class="user-list-wrapper">
		<div class="anime-wrapper" v-for="anime in store.session.list" :key="anime.id">
			<div class="key-visual-wrapper">
				<img class="key-visual" :src="anime.cover" />
			</div>
			<div class="anime-info">
				<h1>{{ anime.name }}</h1>
				<p>by {{ anime.studio }}</p>
				<p>Episodi: {{anime.episodes}}</p>
			</div>
		</div>
	</div>

	<!-- <button @click="reviewList()">Tutti i Post</button>
	<button @click="updateSource('recenti')">Post Recenti</button> -->
</template>

<style scoped>
.anime-wrapper {
	padding: 10px;
	width: max-content;
	display: flex;
	flex-direction: row;
	justify-content: center;
	border-radius: 15px;
	background: var(--bg-2);
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
	margin-right: auto;
	margin-left: auto;
}

.anime-info * {
	padding: 5px;
}
@media screen and (max-width: 690px) {
	h1 {
font-size: 2 0px;
}
	.key-visual {
		width: 80px;
		object-fit: scale-down;
		border-radius: 10px;
		margin-right: auto;
		margin-left: auto;
	}
}
</style>
