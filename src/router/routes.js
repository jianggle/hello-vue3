export default [
	{
		path: '/',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/todo',
		component: () => import('../views/Todo.vue')
	},
	{
		path: '/about',
		component: () => import('../views/About.vue')
	}
]
