<script setup>
//localhost:5173
import Header from './components/Header.vue'
import router from './router'
import { useStore } from './store'
const store = useStore()
</script>

<template>
	<Header></Header>
	<router-view v-slot="{ Component, route }">
		<transition name="slide">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-from {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
