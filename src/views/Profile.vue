<script setup>
import router from '../router'
import { useStore } from '../store'
const store = useStore()

async function logout() {
	await store.API.logout(store.session.token)
	store.logout()
	router.push('/')
}

async function bannerImage() {
	store.API.bannerImage()
}
async function pfp() {
	store.API.pfp()
}
async function bannerImage()
computed: {
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '3'
          case 'sm': return '4'
          case 'md': return '5'
          case 'lg': return '7'
          case 'xl': return '7'
        }
      }
    }
</script>

<template>
	<div class="profile-wrapper">
		<div @click="bannerImage" class="profile-banner">

		</div>
		<div @click="pfp" class="pfp">
			<v-icon name="fa-user" :scale="imageHeight"  />
		</div>
		<button @click="logout" class="logout-button" type="button">Logout</button>
	
	</div>
</template>

<style scoped>
.pfp {
	background: var(--bg-2);
	padding: 10px;
	width: max-content;
	height: max-content;
	border-radius: 50%;
	margin-right: 5px;
	text-align: center;
	position: absolute;
	top: 33%;
	left: 3%;
}
.logout-button {
	width: 20%;
	height: 50px;
	border-radius: 10px;
	border: 0;
	background: var(--text-2);
	color: var(--text);
	margin-top: 20px;
	font-size: 1.4rem;
	cursor: pointer;
	font-weight: bolder;
	margin-left: 75%;

}
.profile-banner {
	background: var(--bg-4);
	display: flex;
	flex-direction: row;
	color: var(--text);
	padding: 20px;
	text-align: center;
	height: 30vh;
}
</style>
