<script setup>
import Search from './search/SearchBar.vue'
import ProfileTooltip from '../components/auth/ProfileTooltip.vue'
import router from '../router'
</script>

<template>
	<header>
		<div class="title" @click="router.push('/')">
			<h1 class="primary">Anime</h1>
			<h1 class="secondary">Tube</h1>
		</div>
		<div class="controls">
			<Search />
			<ProfileTooltip />
		</div>
	</header>
</template>

<style scoped>
header {
	padding: 5px;
	background: var(--bg-2);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 50px;
}

header h1 {
	display: inline;
}

.title {
	cursor: pointer;
	margin-right: 10px;
}

.primary {
	color: var(--text);
}

.secondary {
	color: var(--text-2);
}

.controls {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>
