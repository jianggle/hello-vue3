export default [
	{
		path: '/',
		component: () => import('../views/Home')
	},
	{
		path: '/todo',
		component: () => import('../views/Todo')
	},
	{
		path: '/about',
		component: () => import('../views/About')
	}
]
