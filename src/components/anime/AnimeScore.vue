<script setup>
import 'vue3-circle-progress/dist/circle-progress.css'
import CircleProgress from 'vue3-circle-progress'
import { useStore } from '../../store'
import {onBeforeMount, ref} from 'vue'
const store = useStore()
const score = ref(0)
async function getScore() {
    let result = await store.API.getAnimeScore(store.currentAnime.id)
    if (result.ok)
        score.value = (await result.json()).score
}

onBeforeMount(async () => {
    await getScore()
})
</script>

<template>
	<div class="anime-score-wrapper">
        <circle-progress class="anime-rating" :show-percent="true" empty-color=" #252525" fill-color="#b844ff" :size="150" :percent="score"/>
    </div>
</template>

<style scoped>
.anime-score-wrapper {
    width: 100%;
    margin: auto;
}

.anime-rating {
    margin: auto;
    text-align: center;
}

.anime-rating {
    font-size: 50px;
}
</style>
