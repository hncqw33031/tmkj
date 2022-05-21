const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
	publicPath: "./" ,
	// 关闭ESlink 检查
	lintOnSave: false,
	// css 配置
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					autoprefixer(),
					pxtorem({
						rootValue: 37.5,
						propList: ['*']
					})
				]
			}
		}
	}
}
