<script setup>
import { useAnimeStore } from '../../stores/anime'
import { useAPIStore } from '../../stores/api'
import { useSessionStore } from '../../stores/session'
import { ref } from 'vue'

const props = defineProps({
	isLiked: Boolean
})

const anime = useAnimeStore()
const { API } = useAPIStore()
const session = useSessionStore()

const isLiked = ref(props.isLiked)

async function handleLike() {
	if (isLiked.value) {
		const result = await API.removeFromList(anime.id, session.token)

		if (!result.ok) {
			alert('fallito')
			return
		}

		session.removeFromList({ id: anime.id })
	} else {
		const result = await API.addToList(anime.id, session.token)

		if (!result.ok) {
			alert('fallito')
			return
		}

		session.addToList({ id: anime.id })
	}
	isLiked.value = !isLiked.value
}
</script>

<template>
	<div class="like-button-wrapper" v-if="session.token">
		<button @click="handleLike" :class="{ liked: isLiked }" class="like-button" type="button">
			<v-icon name="fa-star" />
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

.like-button:hover {
	transition: all 0.2s;
	transform: scale(1.1) rotate(-5deg);
}

.liked {
	background: #ff0056;
	color: #ff0;
}
</style>
