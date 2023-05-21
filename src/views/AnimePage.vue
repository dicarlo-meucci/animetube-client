<script setup>
import AnimePanel from '../components/anime/AnimePanel.vue'
import AnimeReviewPanel from '../components/anime/AnimeReviewPanel.vue'
import AnimeEpisodes from '../components/anime/AnimeEpisodesPanel.vue'
import AnimeDescription from '../components/anime/AnimeDescription.vue'
import AnimeReviews from '../components/anime/AnimeReviews.vue'
</script>

<template>
	<div class="anime-page-wrapper">
		<AnimePanel />
		<div class="anime-community-info">
			<AnimeDescription />
			<AnimeEpisodes />
			<AnimeReviewPanel />
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
	margin: 25px;
	border-radius: 25px;
}

.anime-community-info {
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	margin-left: 20px;
}

@media screen and (max-width: 780px) {
	.anime-community-info {
		width: initial;
	}

	.anime-page-wrapper {
		flex-direction: column;
	}

	@media screen and (max-width: 310px) {
		.anime-community-info {
			width: initial;
		}
		.anime-page-wrapper {
			font-size: 10px;
		}
	}
}
</style>
