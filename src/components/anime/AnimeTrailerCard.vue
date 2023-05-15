<script setup>
import { onMounted } from 'vue'

onMounted(() => {
	const cardWrappers = document.querySelectorAll('.trailer-card-wrapper')
	const cards = document.querySelectorAll('.trailer-thumbnail')

	// highest values for angle
	const mostX = 10 // 10 or -10
	const mostY = 10 // 10 or -10

	for (let i = 0; i < cardWrappers.length; i++) {
		cardWrappers[i].addEventListener('mousemove', (e) => {
			// remove transition
			cards[i].style.transition = 'none'

			const x = e.offsetX
			const y = e.offsetY
			const { width, height } = cardWrappers[i].getBoundingClientRect()
			const halfWidth = width / 2
			const halfHeight = height / 2

			// calculate angle
			const rotationY = ((x - halfWidth) / halfWidth) * mostX
			const rotationX = ((y - halfHeight) / halfHeight) * mostY

			// set rotation
			cards[i].style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`
		})

		cardWrappers[i].addEventListener('mouseleave', () => {
			// add transition back
			cards[i].style.transition = 'transform 0.5s ease-in-out'
			cards[i].style.transform = `rotateY(0) rotateX(0)`
		})
	}
})
</script>

<template>
	<div class="trailer-card-wrapper">
    <div class="trailer-info">
      <h1>balls</h1>
      <p>some description here and there</p>
      <button class="play-button">
        <v-icon name="fa-play"></v-icon>
      </button>
    </div>
		<div class="trailer-thumbnail">
			<img src="https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png" />
		</div>
	</div>
</template>

<style scoped>
.trailer-card-wrapper {
	perspective: 1000px;
	width: 400px;
	height: 250px;
	margin: auto;
	padding-top: 20px;
	padding-bottom: 20px;
	position: relative;
	overflow: hidden;
	border-radius: 20px;
}

.trailer-info {
  position: absolute;
  transform: translate(50%, 50%);
  right: 50%;
  bottom: 50%;
  z-index: 1;
  pointer-events: none;
  text-shadow: 0px 0px 5px #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
}

.play-button {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #bf57ff;
  border: 2px solid var(--text-2);
  margin: auto;
  color: #FFF;
  text-align: center;
  pointer-events: all;
  cursor: pointer;
}

img {
	width: 95%;
	border-radius: 15px;
	object-fit: cover;
  border: 3px solid var(--text-2);
}

img:hover {
  transition: all .2s;
  opacity: .7;
}
</style>
