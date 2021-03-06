module.exports = {
	'plugins': {
		// 官方文档 https://github.com/evrone/postcss-px-to-viewport/blob/HEAD/README_CN.md
		'postcss-px-to-viewport': {
			unitToConvert: 'px', // 需要转换的单位
			viewportWidth: 375, // 设计稿的视口宽度
			unitPrecision: 6, // 单位转换后保留的精度
			// propList: ['*', '!border'], // 能转化为vw的css属性列表，*代表全部css属性的单位都进行转换
			viewportUnit: 'vw', // 希望使用的视口单位
			fontViewportUnit: 'vw', // 字体使用的视口单位
			minPixelValue: 1, // 如果为1的话，只有大于1px的值会被转换
			exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件
		}
	}
}
