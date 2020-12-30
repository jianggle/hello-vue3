const {
	devPort,
	isDev,
	isProduct,
} = require('./src/config')

module.exports = {
	assetsDir: 'assets',
	chainWebpack(config) {
		config.plugins.delete('prefetch')
	},
	devServer: {
		host: '0.0.0.0',
		port: devPort,
	},
	productionSourceMap: false,
	publicPath: isProduct ? '/lab/vue3/' : '/',
}
