<script setup>
import { useAnimeStore } from '../../stores/anime'
const anime = useAnimeStore()
</script>

<template>
	<div class="anime-panel-wrapper">
		<h1 class="text-episode">Episodi</h1>
		<a v-for="(episode, key) in anime.episodes" :href="episode.link" target="_blank">
			<button class="button-wrapper">{{ key + 1 }}</button>
		</a>
	</div>
</template>

<style scoped>
.anime-panel-wrapper {
	background: var(--bg-4);
	flex-direction: row;
	margin-top: 20px;
	margin-right: 20px;
	border-radius: 20px;
	color: var(--text);
	padding: 20px;
}

.button-wrapper {
	width: 50px;
	padding: 5px;
	margin: 5px;
	border-radius: 10px;
	border: none;
	font-weight: bold;
	font-size: 1.2rem;
	background: var(--text-2);
	cursor: pointer;
}

.text-episode {
	margin-left: 5px;
	color: var(--text-2);
}
</style>
