import vue from '@vitejs/plugin-vue'

export default ({ command, mode }) => {
	return {
		base: command === 'serve' ? '/' : '/lab/vue3/',
		plugins: [vue()],
		server: {
			port: 9527
		}
	}
}
