<script setup>
import 'vue3-circle-progress/dist/circle-progress.css'
import CircleProgress from 'vue3-circle-progress'
import { useAnimeStore } from '../../stores/anime'
import { useAPIStore } from '../../stores/api'
import { onBeforeMount } from 'vue'

const { API } = useAPIStore()
const anime = useAnimeStore()

async function getScore() {
	const result = await API.getAnimeScore(anime.id)
	if (result.status != 200) {
		return
	}

	anime.setScore((await result.json()).score)
}

onBeforeMount(async () => {
	await getScore()
})
</script>

<template>
	<div class="anime-score-wrapper">
		<circle-progress
			class="anime-rating"
			:show-percent="true"
			:percent="anime.score ?? 0"
			empty-color=" #252525"
			fill-color="#b844ff"
			:size="150"
		/>
	</div>
</template>

<style scoped>
.anime-score-wrapper {
	width: 100%;
	display: flex;
	margin-top: 10px;
}

.anime-rating {
	margin: auto;
	text-align: center;
	color: var(--text-2);
}

.anime-rating {
	font-size: 2.6rem;
}
</style>
