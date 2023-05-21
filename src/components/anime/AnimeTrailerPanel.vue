<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import AnimeTrailerCard from './AnimeTrailerCard.vue'
import { useAPIStore } from '../../stores/api'
import { ref } from 'vue'
import { onBeforeMount } from 'vue'

const { API } = useAPIStore()
const trailers = ref([])

async function fetchTrailers() {
	trailers.value = await (await API.getTrailers()).json()
}

const options = {
	rewind: true,
	rewindSpeed: 400,
	drag: true,
	rewindByDrag: true,
	snap: true,
	perPage: 4,
	perMove: 1,
	breakpoints: {
		2000: {
			perPage: 3
		},
		1500: {
			perPage: 2
		},
		900: {
			arrows: false
		},
		800: {
			arrows: false,
			perPage: 1
		}
	}
}

onBeforeMount(async () => {
	await fetchTrailers()
})
</script>

<template>
	<div class="trailer-wrapper">
		<Splide :options="options">
			<SplideSlide v-for="trailer in trailers">
				<AnimeTrailerCard :image="trailer.thumbnail" :link="trailer.link" />
			</SplideSlide>
		</Splide>
	</div>
</template>

<style scoped></style>
