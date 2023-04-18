<script setup>
import SearchResult from './SearchResult.vue'
import { ref, watch, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
const searchTerm = ref()
</script>

<template>
	<div class="search-wrapper">
		<div class="search-controls">
			<input v-model="searchTerm" type="text" class="search-input" />
			<div v-show="searchTerm" class="search-results">
				<SearchResult :term="searchTerm"></SearchResult>
				<SearchResult :term="searchTerm"></SearchResult>
				<SearchResult :term="searchTerm"></SearchResult>
				<SearchResult :term="searchTerm"></SearchResult>
			</div>
		</div>
	</div>
</template>

<style scoped>
.search-wrapper {
	margin-top: 10px;
}

.search-input {
	border: 0;
	padding: 5px;
	user-select: none;
	width: 100%;
	outline: none;
	height: 20px;
	font-size: 1.5rem;
	background: var(--bg-3);
	color: var(--text);
}

.search-controls {
	background: var(--bg-3);
	border-radius: 15px;
	width: 80%;
	max-width: 80%;
	overflow: hidden;
}

.search-results {
	background: var(--bg-3);
	width: 100%;
	overflow-x: auto;
	max-width: 300px;
}
</style>
