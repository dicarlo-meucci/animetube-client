<script setup>
import { useStore } from '../../store'
const store = useStore()
const userList = store.list


async function reviewList() {

}
</script>

<template>
	<div class="anime-panel-wrapper">
		<h1 class="text-episode">Episodi</h1>
		
		<div id="app">
			<ul>
				<li v-for="review in reviews" :key="review.user" > 
					<p>{{ review.text }}</p>
					<p>by {{ review.user.username }}</p>
				</li>
			</ul>
		</div>
		<button :class="logout - button" @click="reviewList()">Tutti i Post</button>
		<button :class="logout - button" @click="update_source('recenti')">Post Recenti</button>
	</div>
</template>

<style scoped>
.anime-panel-wrapper {
	background: var(--bg-4);
	flex-direction: row;
	margin-top: 20px;
	margin-right: 20px;
	border-radius: 20px;
	color: var(--text);
	padding: 20px;
}

.logout-button {
	width: 20%;
	height: 50px;
	border-radius: 10px;
	border: 0;
	background: var(--text-2);
	color: var(--text);
	margin-top: 20px;
	font-size: 1.4rem;
	cursor: pointer;
	font-weight: bolder;
	margin-left: 75%;

}

.search-result-wrapper {
	display: flex;
	flex-direction: row;
	color: #000;
	align-items: center;
	overflow: hidden;
	width: calc(100% - 10px);
	border-bottom: 1px solid #000;
	color: var(--text);
	padding: 10px 0px 10px 10px;
}
</style>