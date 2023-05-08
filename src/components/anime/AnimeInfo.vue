<script setup>
import { useStore } from '../../store'
const store = useStore()
const anime = store.currentAnime
console.log(anime)
</script>

<template>
    <div class="anime-info-wrapper">
        <p>Studio: <mark> {{ anime.studio }} </mark></p>
        <p>Episodi: <mark> {{ anime.episodes.length }} </mark></p>
        <!-- Da fare -->
        <p>Generi: <mark> {{ anime.tag }} </mark></p>
    </div>
</template>

<style scoped>

.anime-info-wrapper {
    display: flex;
	flex-direction: column;
    margin-right: 20px;
    margin-left: 20px;
    text-align: left;
    color: var(--text);
}

p {
    line-break: auto;
    margin-bottom: 10px;
}

mark {
    background-color: transparent;
    color: var(--text-2);
}

</style>
