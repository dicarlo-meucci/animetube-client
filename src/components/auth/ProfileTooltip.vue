<script setup>
import router from '../../router'
import { useStore } from '../../store'
const store = useStore()
function handleProfile() {
	if (store.session.token) router.push('/profile')
	else router.push('/login')
}
</script>

<template>
	<div class="profile-tooltip-wrapper">
		<div @click="handleProfile" class="profile-tooltip">
			<v-icon class="pfp" name="fa-user" scale="1.2" />
		</div>
	</div>
</template>

<style scoped>
.profile-tooltip {
	background: var(--bg);
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 5px;
	text-align: center;
}

.pfp {
	margin-top: 25%;
}
</style>
