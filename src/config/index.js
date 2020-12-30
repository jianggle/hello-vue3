const { NODE_ENV } = process.env
const isDev = NODE_ENV === 'development'
const isProduct = NODE_ENV === 'production'

module.exports = {
	isDev,
	isProduct,
	apiBaseURL: isDev ? '' : '',
	devPort: 9527,
}
