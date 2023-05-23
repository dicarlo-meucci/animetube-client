<script setup>
import AnimeInfo from './AnimeInfo.vue'
import AnimeLikeButton from './AnimeLikeButton.vue'
import { useAnimeStore } from '../../stores/anime'
import { useSessionStore } from '../../stores/session'
import { useAPIStore } from '../../stores/api'
import { onBeforeMount, ref } from 'vue'
const anime = useAnimeStore()
const session = useSessionStore()
const { API } = useAPIStore()
const isLiked = ref(false)

async function getList() {
	const result = await API.getProfileList(session.token)

	if (result.status != 200) return

	const list = await result.json()
	session.setList(list)
}

async function checkLiked() {
	if (!session.token) return

	if (!session.list.length) await getList()

	isLiked.value = !!session.list.find((a) => a.id == anime.id)
}

onBeforeMount(async () => {
	await checkLiked()
})
</script>

<template>
	<div class="anime-panel-wrapper">
		<AnimeLikeButton :isLiked="isLiked" />
		<h1>{{ anime.name }}</h1>
		<img class="key-visual" :src="anime.cover" />
		<h1>Informazioni</h1>
		<AnimeInfo />
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

@media screen and (max-width: 780px) {
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

@media screen and (max-width: 300px) {
	.key-visual {
		width: 100px;
	}
}
</style>
