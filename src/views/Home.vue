<script setup>
import AnimeSlideshow from '../components/anime/AnimeSlideshow.vue'
</script>

<template>
	<div class="home-wrapper">
		<AnimeSlideshow></AnimeSlideshow>

		<div class="trailer">
			<p class="text-trailer">Trailer</p>
		</div>
	</div>
</template>

<style scoped>
.home-wrapper {
	height: calc(100vh - 60px);
	display: flex;
	flex-direction: column;
}

.home-wrapper div {
	height: 100%;
}

.trailer {
	background: var(--bg-2);
}

.text-trailer {
	font-size: 35px;
	margin-left: 5px;
	margin-top: 5px;
}
</style>
