<script>
import { ref } from 'vue'
const toggled = ref(false)
const data = ref()

function toggle() {
    toggled.value = !toggled.value
}

function validate() {
    // todo
}
</script>

<template>
	<div v-if="toggled" class="prompt-wrapper">
		<h1 class="title">Link</h1>
		<textarea v-model="data" class="link"></textarea>
		<div class="lower">
			<button class="button cancel" @click="toggle">Cancella</button>
			<button class="button set" @click="validate">OK</button>
		</div>
	</div>
</template>

<style scoped>
.prompt-wrapper {
	position: absolute;
	right: 50%;
	bottom: 50%;
	transform: translate(50%, 50%);
	height: 300px;
	width: 500px;
	background-color: var(--bg-4);
	text-align: center;
	border-radius: 15px;
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}

.title {
	color: var(--text-2);
	margin-top: 15px;
}

textarea {
	width: 80%;
	height: 40%;
	padding: 5px;
	display: inline-block;
	border-radius: 10px;
	border: none;
	box-sizing: border-box;
	outline: none;
	background: var(--bg-3);
	color: #fff;
	resize: none;
	margin: auto;
}

.button {
	width: 120px;
	height: 35px;
	border: none;
	font-size: 1rem;
	padding: 5px 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	margin: 15px;
	transition-duration: 0.4s;
	cursor: pointer;
	border-radius: 5px;
}

.cancel {
	background-color: #ff0056;
}

.set {
	background-color: #b844ff;
}
</style>
