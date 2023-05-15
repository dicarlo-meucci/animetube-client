<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from '../../store'
const store = useStore()
const list = ref()

async function getList() {
	list.value = await (await store.API.getProfileList(store.session.token)).json()
	store.updateSession('list', list.value)
}

onMounted(async () => {
	await getList()
})
</script>

<template>
	<div class="user-list-wrapper">
		<div>
			<ul>
				<li v-for="anime in store.session.list" :key="anime.id">
					<p>{{ anime.name }}</p>
					<p>by {{ anime.description }}</p>
				</li>
			</ul>
		</div>
		<button @click="reviewList()">Tutti i Post</button>
		<button @click="updateSource('recenti')">Post Recenti</button>
	</div>
</template>

<style scoped>
.user-list-wrapper {

}

</style>
