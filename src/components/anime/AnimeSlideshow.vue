<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
  {
    title: 'Slide #1',
    content: 'Slide 1 content.',
    image: 'https://www.akibagamers.it/wp-content/uploads/2022/12/blue-lock-anime-01-1620x800.jpg'
  },
  {
    title: 'Slide #2',
    content: 'Slide 2 content.',
    image: 'https://sm.ign.com/t/ign_it/screenshot/default/genshin-ufotale_kt8y.1280.png'
  },
  {
    title: 'Slide #3',
    content: 'Slide 3 content.',
    image: 'https://www.artribune.com/wp-content/uploads/2023/03/Naruto.jpg'
  },
  {
    title: 'Slide #4',
    content: 'Slide 4 content.',
    image: 'https://multiplayer.net-cdn.it/thumbs/images/2022/12/25/nier-automata-pv_12-25-22_jpg_1600x900_crop_q85.jpg'
  },
  {
    title: 'Slide #5',
    content: 'Slide 5 content.',
    image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/01/10-darkest-anime-series-of-all-time.jpg'
  }
]
</script>

<template>
	<div class="slideshow-wrapper">
		<vueper-slides>
			<vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title" :content="slide.content">
			</vueper-slide>
		</vueper-slides>
	</div>
</template>

<style scoped>
.slideshow-wrapper {

}
</style>
