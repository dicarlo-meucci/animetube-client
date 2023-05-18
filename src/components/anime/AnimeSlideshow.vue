<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import router from '../../router'

const slides = [
	{
		image: 'https://www.akibagamers.it/wp-content/uploads/2022/12/blue-lock-anime-01-1620x800.jpg'
	},
	{
		image: 'https://www.tomshw.it/images/images/2022/09/assassination-classroom-5-motivi-247684.jpg'
	},
	{
		image: 'https://www.artribune.com/wp-content/uploads/2023/03/Naruto.jpg'
	},
	{
		image: 'https://multiplayer.net-cdn.it/thumbs/images/2022/12/25/nier-automata-pv_12-25-22_jpg_1600x900_crop_q85.jpg'
	},
	{
		image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/01/10-darkest-anime-series-of-all-time.jpg'
	}
]

const breakpoints = {
	400: {
		slideRatio: 1.2
	},
	500: {
		slideRatio: 1.1
	},
	600: {
		slideRatio: 1
	},
	700: {
		slideRatio: 0.8
	},
	900: {
		slideRatio: 0.7
	},
	1100: {
		slideRatio: 0.5
	},
	1300: {
		slideRatio: 0.4
	},
	1400: {
		slideRatio: 0.35
	},
	1600: {
		slideRatio: 0.3
	},
	2000: {
		slideRatio: 0.28
	}
}
</script>

<template>
	<div class="slideshow-container">
		<div class="slideshow-wrapper">
			<vueper-slides :arrows="true" :breakpoints="breakpoints" :duration="2000" autoplay>
				<vueper-slide
					class="slide-image"
					@click="router.push('/anime')"
					v-for="(slide, i) in slides"
					:key="i"
					:image="slide.image"
				>
				</vueper-slide>
			</vueper-slides>
		</div>
	</div>
</template>

<style scoped>
.slideshow-container {
	background: var(--bg-2);
}
</style>
