<script setup>
import Search from './search/SearchBar.vue'
import ProfileTooltip from './ProfileTooltip.vue'
</script>

<template>
	<header>
		<div class="title">
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
