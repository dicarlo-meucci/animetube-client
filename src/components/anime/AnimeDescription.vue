<script setup>
import { useStore } from '../../store'
const store = useStore()
const anime = store.currentAnime
</script>

<template>
    <div class="anime-panel-wrapper">
		<h1 class="text-description">Trama</h1>
        <p>{{ anime.description }}</p>
    </div>
</template>

<style scoped>

.anime-panel-wrapper {
	background: var(--bg-4);
	flex-direction: row;
	margin-top: 20px;
    margin-right: 20px;
	border-radius: 20px;
	color: var(--text);
	padding: 20px;
}

.text-description {
	color: var(--text-2);
}
</style>
