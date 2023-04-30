<script setup>
import { useStore } from '../../store'
const store = useStore()
const anime = store.currentAnime
</script>

<template>
    <div class="anime-panel-wrapper">
        <p>{{store.currentAnime.description}}</p>
    </div>
</template>

<style scoped>

.anime-panel-wrapper {
	background: var(--bg-4);
	display: flex;
	flex-direction: row;
	margin-top: 20px;
    margin-right: 20px;
	border-radius: 20px;
	color: var(--text);
	padding: 20px;
	text-align: center;
}

</style>
