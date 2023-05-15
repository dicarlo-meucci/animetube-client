<script setup>
import AnimeScore from './AnimeScore.vue'
import AnimeInfo from './AnimeInfo.vue'
import AnimeLikeButton from './AnimeLikeButton.vue'
import { useStore } from '../../store'
const store = useStore()

async function fetchList(){
	const profileList = await (await store.API.getProfileList(store.session.token)).json()

	store.setSession({
		username: profile.username,
		email: profile.email,
		banner: profile.banner,
		pfp: profile.pfp,
		token: store.session.token,
		list: profile.list
		
	})
}
async function sendToAnime(id) {
	router.push(`/anime/view/${id}`)
}
</script>

<template>
	<div class="anime-panel-wrapper">
		<div class="title">
			{{ anime.name }}
			<AnimeLikeButton /> 
		</div>
		<img class="key-visual" :src="anime.cover" @click="sendToAnime(id)"/>
        <a v-for="list in profile.list"  target="_blank"> {{ anime }} </a>
		<h1>Informations</h1>
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
	padding: 20px;
	text-align: center;
}

.anime-panel-wrapper * {
	margin: 5px;
}

.title {
	text-align: center;
	font-weight: bold;
	font-size: 2em;
	display: flex;
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
