<script setup>
import SearchResult from './SearchResult.vue'
import { ref, watch, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { useStore } from '../../store'
import router from '../../router'
const store = useStore()
const searchTerm = ref()
const searchResults = ref([])
// Define a variable to keep track of the animation timeline
let animationTimeline = null
let firstInteraction = true

watch(searchTerm, async (newValue, oldValue) => {
	if (newValue)
	searchResults.value = await store.API.searchAnime(newValue)
})

// Watch the searchTerm variable
watch(searchTerm, (newValue, oldValue) => {
	if (firstInteraction) {
		animationTimeline = gsap.timeline()
		animationTimeline.to('.search-results', { y: -100, opacity: 0, duration: 0.3, display: 'none' })
		firstInteraction = false
	}

	if (oldValue && !newValue) {
		// When the searchTerm becomes empty, animate the search results to disappear
		animationTimeline = gsap.timeline()
		animationTimeline.to('.search-results', { y: -100, opacity: 0, duration: 0.3, display: 'none' })
	} else if (newValue && !oldValue) {
		// When the searchTerm becomes non-empty, animate the search results to appear
		animationTimeline = gsap.timeline()
		animationTimeline.to('.search-results', { y: 0, opacity: 1, duration: 0.3, display: 'block' })
	}
})

function displayAnime(id) {
	searchTerm.value = ''
	router.push(`/anime/view/${id}`)
}
</script>

<template>
	<div class="search-wrapper">
		<div class="search-controls">
			<input v-model="searchTerm" type="text" class="search-input" placeholder="Cerca qui il tuo anime" />
			<div class="search-results">
				<SearchResult v-for="(result, index) in searchResults" :title="result.name" :cover="result.cover" @click="displayAnime(result.id)"></SearchResult>
			</div>
		</div>
	</div>
</template>

<style scoped>
.search-wrapper {
	width: 60%;
	margin-top: 10px;
	z-index: 100;
}

.search-input {
	border: 0;
	padding: 5px 10px 5px 10px;
	user-select: none;
	outline: none;
	width: 90%;
	height: 20px;
	font-size: 1.2rem;
	background: var(--bg-3);
	color: var(--text);
}

.search-controls {
	background: var(--bg-3);
	border-radius: 15px;
	overflow: hidden;
}

.search-results {
	background: var(--bg-3);
	width: 100%;
	max-width: 300px;
	display: none;
}
</style>
