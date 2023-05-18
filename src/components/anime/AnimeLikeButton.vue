<script setup>
import { useAnimeStore } from '../../stores/anime'
import { useAPIStore } from '../../stores/api'
import { useSessionStore } from '../../stores/session'
import { ref } from 'vue'

const props = defineProps({
	toggled: Boolean
})

const anime = useAnimeStore()
const { API } = useAPIStore()
const session = useSessionStore()

const toggled = ref(props.toggled)

async function addToList() {
	const result = await API.addToList(anime.id, session.token)

	if (!result.ok) {
		alert('fallito')
		return
	}

	session.addToList(JSON.parse(JSON.stringify(anime)))
	toggled.value = !toggled.value
}
</script>

<template>
	<div class="like-button-wrapper" v-if="session.token">
		<button @click="addToList" class="like-button" type="button">
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

.liked {
	background: #ff0056;
	color: #ff0;
}
</style>
