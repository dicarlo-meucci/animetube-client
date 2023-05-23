<script setup>
import AnimeSlideshow from '../components/anime/AnimeSlideshow.vue'
import AnimeTrailerPanel from '../components/anime/AnimeTrailerPanel.vue'
</script>

<template>
	<div class="home-wrapper">
		<AnimeSlideshow />

		<div class="trailer">
			<AnimeTrailerPanel />
		</div>
	</div>
</template>

<style scoped>
.home-wrapper {
	height: calc(100vh - 60px);
	display: flex;
	flex-direction: column;
}

.trailer {
	background: var(--bg-2);
	height: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>
