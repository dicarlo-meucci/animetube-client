import { createRouter, createWebHistory } from 'vue-router'

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
		path: '/anime',
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

export default router
