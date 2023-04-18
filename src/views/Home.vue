<script setup></script>

<template>
	<div class="home-wrapper">
		<!-- carousel -->
		<div class="carousel"></div>

		<div class="trailer">
			<p class="text-trailer">Trailer</p>
			<!-- DA FIXARE L'ANIMAZIONE <p style="transform: translate3d(-1710px, 0px, 0px); transition: all 0.25s ease 0s; width: 4104px;">  </p> -->
		</div>
	</div>
</template>

<style scoped>
.home-wrapper {
	height: calc(100vh - 60px);
	display: flex;
	flex-direction: column;
}

.home-wrapper div {
	height: 100%;
}

.trailer {
	background: var(--bg-2);
}

.text-trailer {
	font-size: 35px;
	margin-left: 5px;
	margin-top: 5px;
}
</style>
