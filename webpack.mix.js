const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
	.setResourceRoot('/dist')
	.postCss('src/styles/index.css', 'styles', [[tailwindcss]])
	.js('src/scripts/index.js', 'dist/scripts/index.js')
	.vue({ version: 3 })
	.setPublicPath('dist')
	.options({
		processCssUrls: false
	})
	.extract();
