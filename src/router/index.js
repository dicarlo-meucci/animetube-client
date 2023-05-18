import { createRouter, createWebHistory } from 'vue-router'
import { useSessionStore } from '../stores/session'
import { useAPIStore } from '../stores/api'
import { useAnimeStore } from '../stores/anime'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/Register.vue')
	},
	{
		path: '/profile/:pathMatch(.*)*',
		name: 'Profile',
		component: () => import('../views/Profile.vue')
	},
	{
		path: '/user/:pathMatch(.*)*',
		name: 'User',
		component: () => import('../views/UserPage.vue')
	},
	{
		path: '/anime/:pathMatch(.*)*',
		name: 'Anime',
		component: () => import('../views/AnimePage.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('../views/NotFound.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(async (to, from) => {
	const session = useSessionStore()
	const animeStore = useAnimeStore()
	const { API } = useAPIStore()

	if (to.name === 'Login' || to.name === 'Register') {
		if (session.token) router.push('/Profile')
	}

	if (to.name === 'Anime') {
		const id = to.path.split('/')[3]
		if (id) {
			const anime = await (await API.getAnime(id)).json()
			animeStore.setAnime(anime)
		} else router.push('/NotFound')
	}

	if (to.name === 'User') {
		if (!session.username) {
			await fetchProfile()
		}

		if (to.fullPath.split('/')[to.fullPath.split('/').length - 1] == session.username) {
			router.push('/profile')
		}
	}

	if (to.name === 'Profile') {
		if (!session.token) router.push('/Login')
	}
})

async function fetchProfile() {
	const { API } = useAPIStore()
	const session = useSessionStore()
	const profile = await (await API.getProfile(session.token)).json()
	session.setUsername(profile.username)
	session.setEmail(profile.email)
	session.setBanner(profile.banner)
	session.setPfp(profile.pfp)
}

export default router
