<script setup>
import { useStore } from '../../store'
const store = useStore()
const anime = store.currentAnime

    async function addToList() {
	const result = await store.API.addToList(anime.id, store.session.token)
	if (!result.ok)
		alert('fallito')
}
</script>

<template>
    <div class="like-button-wrapper" v-if="store.session.token">
			<button @click="addToList" class="like-button" type="button"> 
				<v-icon name="fa-star"/> 
			</button>
		</div>
</template>

<style scoped>
.like-button {
    right: -10px;
    top: -10px;
    width: 50px;
    height: 50px;
    padding: 5px;
    position: absolute;
    border-radius: 50%;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    background: var(--text-2);
    color: var(--text);
}

</style>