<script setup>
import router from '../../router'
import { useSessionStore } from '../../stores/session'
import { useAPIStore } from '../../stores/api'
const { API } = useAPIStore()
const session = useSessionStore()

function handleProfile() {
	if (session.token) router.push('/profile')
	else router.push('/login')
}
</script>

<template>
	<div class="profile-tooltip-wrapper">
		<div @click="handleProfile" class="profile-tooltip">
			<v-icon v-if="!session.pfp" class="pfp" name="fa-user" scale="1.2" />
			<img v-if="session.pfp" :src="session.pfp" />
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
	margin-left: 25px;
	text-align: center;
	cursor: pointer;
}

img {
	border-radius: 50%;
	width: 50px;
}

.pfp {
	overflow: hidden;
	margin-top: 25%;
}

@media screen and (max-width: 550px) {
	.profile-tooltip {
		margin-left: 5px;
	}
}
</style>
