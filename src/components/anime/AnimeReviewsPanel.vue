<script setup>
import { useStore } from '../../store'
const store = useStore()
const anime = store.currentAnime
</script>

<template>
    <div class="anime-panel-wrapper">
		<h1 class="text-review">Recensioni</h1>
		<textarea class="description-wrapper" type="text" placeholder="Lascia una recensione..."></textarea>
        <button type="submit" class="button-wrapper"> Pubblica </button>
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

.description-wrapper {
	margin: 5px;
	font-size: 1rem;
    width: auto;
    height: 200px;
    padding: 10px;
    border: 2px solid var(--text-2);
    border-radius: 20px;
    outline: none;
    
}

.text-review {
	margin-left: 5px;
	color: var(--text-2);
}

.button-wrapper {
	width: 75px;
	padding: 5px;
	margin: 5px;
	border-radius: 10px;
	border: none;
	font-weight: bold;
	font-size: 1rem;
	background: var(--text-2);
    color: var(--text);
}

</style>
