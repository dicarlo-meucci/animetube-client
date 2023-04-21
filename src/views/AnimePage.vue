<script setup>
import AnimePanel from '../components/anime/AnimePanel.vue'
</script>

<template>
	<div class="anime-page-wrapper">
		<AnimePanel></AnimePanel>
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
