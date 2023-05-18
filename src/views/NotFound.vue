<script setup>
// add BATTISTINI easter egg
</script>

<template>
	<div class="notfound-wrapper">
		<div class="notfound-content">
			<h1>Contenuto Inesistente</h1>
			<img src="https://i.pinimg.com/originals/2f/b6/b9/2fb6b97352da3c0fbe939f85ea033955.webp" />
			<img class="battistini" src="https://dicarlo-meucci.github.io/tennolock/media/battistini.png" />
		</div>
	</div>
</template>

<style scoped>
h1 {
	font-size: 4rem;
	color: var(--text-2);
}

img {
	border-bottom-left-radius: 75px;
	border-bottom-right-radius: 75px;
}

.battistini {
	opacity: 0;
	width: 250px;
	left: 25%;
	top: 17%;
	position: absolute;
}

.battistini:hover {
	transition: all 0.5s;
	opacity: 1;
}

.notfound-wrapper {
	height: calc(100vh - 60px);
	display: flex;
	flex-direction: column;
}

.notfound-content {
	background: var(--bg-2);
	border-radius: 20px;
	padding: 30px;
	text-align: center;
	width: max-content;
	margin: auto;
	position: relative;
}
</style>
