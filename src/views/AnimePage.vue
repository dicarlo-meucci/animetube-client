<script setup>
import AnimePanel from '../components/anime/AnimePanel.vue'
import AnimeReviews from '../components/anime/AnimeReviewsPanel.vue'
import AnimeScore from '../components/anime/AnimeScore.vue'
import AnimeEpisodes from '../components/anime/AnimeEpisodesPanel.vue'
import AnimeDescription from '../components/anime/AnimeDescription.vue'
import router from '../router'
import { useStore } from '../store'
import { onMounted, ref, watch } from 'vue'
const store = useStore()
</script>

<template>
	<div class="anime-page-wrapper">
		<AnimePanel></AnimePanel>
		<div class="anime-community-info">
			<AnimeDescription />
			<AnimeEpisodes />
			<AnimeReviews />
		</div>
	</div>
</template>

<style scoped>
.anime-page-wrapper {
	background: var(--bg-2);
	height: flex;
	display: flex;
	flex-direction: row;
	margin-top: 25px;
	margin-bottom: 25px;
	margin-left: 25px;
	margin-right: 25px;
	border-radius: 25px;
}

.anime-community-info {
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
}

@media screen and (max-width: 690px) {
	.anime-page-wrapper {
		flex-direction: column;
	}

	.anime-community-info {
		margin-left: 20px;
	}

	@media screen and (max-width: 310px) {
		.anime-page-wrapper {
			font-size: 10px;
		}
	}
}
</style>
