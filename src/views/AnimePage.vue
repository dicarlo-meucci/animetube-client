<script setup>
import AnimePanel from '../components/anime/AnimePanel.vue'
import AnimeReviews from '../components/anime/AnimeReviewsPanel.vue'
import AnimeScore from '../components/anime/AnimeScore.vue'
import AnimeEpisodes from '../components/anime/AnimeEpisodesPanel.vue'
</script>

<template>
	<div class="anime-page-wrapper">
		<AnimePanel></AnimePanel>
		<div class="anime-community-info">
			<AnimeReviews></AnimeReviews>
			<AnimeScore></AnimeScore>
			<AnimeEpisodes></AnimeEpisodes>
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
