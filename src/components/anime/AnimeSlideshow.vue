<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
	{
		image: 'https://www.tomshw.it/images/images/2023/04/ecco-il-protagonista-del-nuovo-manga-di-naruto-e-di-cosa-parler-275617.jpg'
	},
	{
		image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4e954b4dff8729bf4476d76d8185bce6.jpe'
	},
	{
		image: 'https://pic-bstarstatic.akamaized.net/ugc/26d7d76175410abc89fc28b577be31f694da7025.jpg'
	},
	{
		image: 'https://i0.wp.com/www.moviedigger.it/wp-content/uploads/2018/02/tokyo-ghoul-immagine-moviedigger.jpg'
	},
	{
		image: 'https://i.etsystatic.com/23543199/r/il/ca0815/3360349950/il_570xN.3360349950_hcov.jpg'
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
