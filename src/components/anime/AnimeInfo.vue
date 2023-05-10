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
		<p>
			Studio: <a v-for="studio in studios" :href="getStudioLink(studio)" target="_blank"> {{ studio }} </a>
		</p>
		<p>
			Episodi: <mark> {{ anime.episodes.length }} </mark>
		</p>
		<!-- Da fare -->
		<p>
			Generi: <mark> {{ anime.tag }} </mark>
		</p>
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
}

p {
	line-break: auto;
	margin-bottom: 10px;
}

mark {
	background-color: transparent;
	color: var(--text-2);
}

a {
	color: var(--text-2);
	text-decoration: none;
}
</style>
