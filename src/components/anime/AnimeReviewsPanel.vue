<script setup>
import { useStore } from '../../store'
const store = useStore()
const anime = store.currentAnime
</script>

<template>
	<div class="anime-panel-wrapper">
		<h1 class="text-review">Recensioni</h1>
		<div class="review-controls">
			<textarea class="description-wrapper" type="text" placeholder="Lascia una recensione..."></textarea>
			<input orient="vertical" class="rating" type="range" min="1" max="100" />
		</div>
		<button type="submit" class="publish-button">Pubblica</button>
	</div>
</template>

<style scoped>
.anime-panel-wrapper {
	background: var(--bg-4);
	flex-direction: column;
	display: flex;
	margin-top: 20px;
	margin-right: 20px;
	border-radius: 20px;
	color: var(--text);
	padding: 20px;
}

.review-controls {
	width: 100%;
	height: 150px;
	display: flex;
	flex-direction: row;
}

.rating {
	-webkit-appearance: none;
	appearance: none;
	margin-top: 5px;
	height: 120px;
	background: var(--bg-2);
	border-radius: 10px;
}

.rating::-moz-range-thumb,
.rating::-webkit-slider-thumb {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	cursor: pointer;
	background: var(--text-2);
}

.description-wrapper {
	margin: 5px;
	font-size: 1rem;
	width: auto;
	height: 100px;
	width: 100%;
	padding: 10px;
	border: 2px solid var(--text-2);
	border-radius: 20px;
	outline: none;
	background: var(--bg-3);
	color: #fff;
}

.text-review {
	margin-left: 5px;
	color: var(--text-2);
}

.publish-button {
	width: 75px;
	padding: 5px;
	margin-left: auto;
	border-radius: 10px;
	border: none;
	font-weight: bold;
	font-size: 1rem;
	background: var(--text-2);
	color: var(--text);
}
</style>
