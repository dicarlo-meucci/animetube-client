<script setup>
import Header from './components/Header.vue'
import { useSessionStore } from './stores/session'
const { loadSession } = useSessionStore()
loadSession()
</script>

<template>
	<Header></Header>
	<transition name="slide">
		<router-view v-slot="{ Component, route }">
			<component :key="route" :is="Component" />
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
