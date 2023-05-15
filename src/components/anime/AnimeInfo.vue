<script setup>
import { useStore } from '../../store'
const store = useStore()
const anime = store.currentAnime
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
		<h3>Studio</h3>
	 <a v-for="studio in studios" :href="getStudioLink(studio)" target="_blank"> {{ studio }} </a>
		<h3>Episodi</h3>
		<div class="episode">{{ anime.episodes.length }}</div>
		<h3>Generi</h3>
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
	text-align: left;
	color: var(--text);
	text-align: center;
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
	width: max-content;
	background: var(--text-2);
	padding: 5px;
	margin: 5px;
	font-size: 20px;
	border-radius: 10px;
	color: #000;
	cursor: pointer;
}

.episode {
	margin: auto;
	width: max-content;
	font-size: 1.2rem;
	color: var(--text-2);
}

.tag-wrapper {
	width: 100%;
	display: flex;
	justify-content: center;
}

a {
	color: var(--text-2);
	text-decoration: none;
	font-size: 20px;
}
</style>
