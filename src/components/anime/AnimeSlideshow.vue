<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
	{
		image: 'https://i.redd.it/btujcq4vmcjy.jpg'
	},
	{
		image: 'https://rare-gallery.com/uploads/posts/554211-food-wars-shokugeki.jpg'
	},
	{
		image: 'https://cdn.wallpapersafari.com/68/37/Jwpngb.jpg'
	},
	{
		image: 'https://wallpaperaccess.com/full/3322629.jpg'
	},
	{
		image: 'https://i.pinimg.com/originals/5b/26/26/5b262629a153363a7f0e150a6ca9dffb.png'
	},
	{
		image: 'https://i.ytimg.com/vi/MYxIx8ljI9U/maxresdefault.jpg'
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
				<vueper-slide class="slide-image" v-for="(slide, i) in slides" :key="i" :image="slide.image">
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
