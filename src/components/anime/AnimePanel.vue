<script setup>
import AnimeScore from './AnimeScore.vue'
import AnimeInfo from './AnimeInfo.vue'
import { useStore } from '../../store'
const store = useStore()
const anime = store.currentAnime

async function addToList() {
	const result = await store.API.addToList(anime, store.session.token)
	if (!result.ok)
		alert('fallito')
}
</script>

<template>
	<div class="anime-panel-wrapper">
		<h1>{{ anime.name }}</h1>
		<img class="key-visual" :src="anime.cover" />
		<h1>Informations</h1>
		<AnimeInfo />
		<div @click="addToList">
			<v-icon name="fa-heart"  :scale="3"/>
		</div>
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
	padding: 20px;
	text-align: center;
}

.anime-panel-wrapper * {
	margin: 5px;
}

.key-visual {
	width: 80%;
	object-fit: scale-down;
	border-radius: 10px;
	margin-right: auto;
	margin-left: auto;
}

@media screen and (max-width: 690px) {
	.anime-panel-wrapper {
		margin-bottom: 0px;
	}
}
</style>
