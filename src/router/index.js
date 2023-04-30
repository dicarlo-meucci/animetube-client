import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '../store'

const routes = [
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
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/profile/:pathMatch(.*)*',
		name: 'Profile',
		component: () => import('../views/Profile.vue')
	},
	{
		path: '/anime/:pathMatch(.*)*',
		name: 'Anime',
		component: () => import('../views/AnimePage.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import('../views/NotFound.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(async (to, from) => {
	const store = useStore()
	if (to.name === 'Anime') {
		const id = to.path.split('/')[3]
		store.setAnime(await store.API.getAnime(id))
	}
})

export default router
