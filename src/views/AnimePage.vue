<script setup>
import AnimePanel from '../components/anime/AnimePanel.vue'
import AnimeReviews from '../components/anime/AnimeReviewsPanel.vue'
import AnimeScore from '../components/anime/AnimeScore.vue'
import AnimeEpisodes from '../components/anime/AnimeEpisodesPanel.vue'
import router from '../router'
import { useStore } from '../store'
import { onMounted, ref, watch } from 'vue'
const store = useStore()
let animeID = router.currentRoute.value.path.split('view')[1].substring(1)
const anime = ref()

const fetchAnimeData = async () => {
	anime.value = await store.API.getAnime(animeID)
}

onMounted(fetchAnimeData)
watch(router.currentRoute, fetchAnimeData)
</script>

<template>
	<div class="anime-page-wrapper" v-if="anime">
		<AnimePanel :anime="anime"></AnimePanel>
		<div class="anime-community-info">
			<AnimeReviews :anime="anime"></AnimeReviews>
			<AnimeScore :anime="anime"></AnimeScore>
			<AnimeEpisodes :anime="anime"></AnimeEpisodes>
		</div>
	</div>
</template>

<style scoped>
.anime-page-wrapper {
	background: var(--bg-2);
	height: 85vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 25px;
	border-radius: 25px;
}
</style>
