<script setup>
import Search from './search/SearchBar.vue'
import ProfileTooltip from '../components/auth/ProfileTooltip.vue'
import router from '../router'
import Logo from '../assets/at-logo.png'
</script>

<template>
	<header>
		<div class="title" @click="router.push('/')">
			<img :src="Logo" alt="Logo Not Found" class="logo" />
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
	margin-left: 10px;
	margin-top: 5px;
}

.logo {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: none;
	border: 2px solid var(--text-2);
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
	justify-content: right;
}

@media screen and (max-width: 550px) {
	.primary {
		display: none;
	}
	.secondary {
		display: none;
	}
	.logo {
		display: initial;
	}
	.title {
		margin-top: 0px;
	}
}
</style>
