<script setup>
import { useAnimeStore } from '../../stores/anime'
const anime = useAnimeStore()

const studios = anime.studio.split(', ')

if (studios.length > 1) studios[1] = ', ' + studios[1]

function getStudioLink(studio) {
	if (studio.includes(', ')) {
		return (
			'https://it.wikipedia.org/w/index.php?go=Vai&search=' +
			studio.replace(' ', '').replaceAll(',', '').replaceAll(' ', '+')
		)
	} else {
		return 'https://it.wikipedia.org/w/index.php?go=Vai&search=' + studio.replaceAll(' ', '+')
	}
}
</script>

<template>
	<div class="anime-info-wrapper">
		<h2>Studio</h2>
		<a v-for="studio in studios" :href="getStudioLink(studio)" target="_blank"> {{ studio }} </a>
		<h2>Episodi</h2>
		<div class="episode">{{ anime.episodes.length }}</div>
		<h2>Generi</h2>
		<div class="tag-wrapper">
			<div class="tag" v-for="tag in anime.tags">{{ tag }}</div>
		</div>
	</div>
</template>

<style scoped>
.anime-info-wrapper {
	display: flex;
	flex-direction: column;
	margin-right: 20px;
	margin-left: 20px;
	color: var(--text);
	text-align: center;
	font-weight: bold;
}

.anime-info-wrapper h3 {
	margin-top: 5px;
	margin-bottom: 5px;
}

p {
	line-break: auto;
	margin-bottom: 10px;
}

.tag {
	background: var(--text-2);
	height: 25px;
	padding: 5px;
	margin: 5px;
	font-size: 1.2rem;
	border-radius: 10px;
	color: var(--text);
}

.episode {
	margin: auto;
	width: max-content;
	font-size: 1.2rem;
	color: var(--text-2);
}

.tag-wrapper {
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: auto;
}

a {
	color: var(--text-2);
	text-decoration: none;
	font-size: 20px;
}
</style>
