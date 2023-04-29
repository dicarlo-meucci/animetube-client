<script setup>
import Header from './components/Header.vue'
import router from './router'
import { useStore } from './store'
const store = useStore()
</script>

<template>
	<Header></Header>
	<transition name="slide">
		<router-view :key="router.currentRoute.value" v-slot="{ Component, route }">
			<component :is="Component" />
		</router-view>
	</transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s;
}

.slide-enter-from {
	transform: translateY(100%);
}

.slide-enter-to {
	transform: translateY(0);
}

.slide-leave-from {
	transform: translateY(0);
}

.slide-leave-to {
	transform: translateY(-100%);
}
</style>
