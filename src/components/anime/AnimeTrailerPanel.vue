<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import AnimeTrailerCard from './AnimeTrailerCard.vue'

const options = {
	type: 'loop',
	drag: 'free',
	rewindByDrag: true,
	snap: true,
	perPage: 4,
	perMove: 1,
	flickPower: 0,
	breakpoints: {
		1950: {
			perPage: 3
		},
		1500: {
			perPage: 2
		},
		1000: {
			arrows: false,
			perPage: 1
		}
	}
}
</script>

<template>
	<div class="trailer-wrapper">
		<Splide :options="options" aria-labelledby="My Favorite Images">
			<SplideSlide>
				<AnimeTrailerCard />
			</SplideSlide>
			<SplideSlide>
				<AnimeTrailerCard />
			</SplideSlide>
			<SplideSlide>
				<AnimeTrailerCard />
			</SplideSlide>
			<SplideSlide>
				<AnimeTrailerCard />
			</SplideSlide>
			<SplideSlide>
				<AnimeTrailerCard />
			</SplideSlide>
			<SplideSlide>
				<AnimeTrailerCard />
			</SplideSlide>
			<SplideSlide>
				<AnimeTrailerCard />
			</SplideSlide>
			<SplideSlide>
				<AnimeTrailerCard />
			</SplideSlide>
		</Splide>
	</div>
</template>

<style scoped></style>
