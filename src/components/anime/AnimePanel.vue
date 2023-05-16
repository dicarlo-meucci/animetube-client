<script setup>
import AnimeScore from './AnimeScore.vue'
import AnimeInfo from './AnimeInfo.vue'
import AnimeLikeButton from './AnimeLikeButton.vue'
import { useStore } from '../../store'
const store = useStore()
const anime = store.currentAnime

async function getList() {
	list.value = await (await store.API.getProfileList(store.session.token)).json()
	store.updateSession('list', list.value)
}

async function checkLiked() {
	if (!store.session.list) {
		await getList()
	}

	return !!store.session.list.find((a) => a.id == anime.id)
}
</script>

<template>
	<div class="anime-panel-wrapper">
		<AnimeLikeButton :toggled="checkLiked()" />
		<h1>{{ anime.name }}</h1>
		<img class="key-visual" :src="anime.cover" />
		<h1>Informazioni</h1>
		<AnimeInfo />
		<AnimeScore />
	</div>
</template>

<style scoped>
.anime-panel-wrapper {
	background: var(--bg-4);
	display: flex;
	flex-direction: column;
	margin: 20px;
	border-radius: 20px;
	height: 80%;
	color: var(--text-2);
	padding: 25px;
	text-align: center;
	position: relative;
}

.anime-panel-wrapper * {
	margin: 5px;
}

.key-visual {
	width: 300px;
	border-radius: 15px;
	margin: auto;
	text-align: center;
}

@media screen and (max-width: 690px) {

	.key-visual {
		width: 250px;
	}
	.anime-panel-wrapper {
		margin-bottom: 0px;
	}
}

@media screen and (max-width: 400px) {

.key-visual {
	width: 200px;
}
.anime-panel-wrapper {
	margin-bottom: 0px;
}
}
</style>
