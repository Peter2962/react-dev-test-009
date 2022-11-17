const path = require('path');
const webpack = require('webpack');
const cracoAlias = require('craco-alias');

module.exports = {
	webpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery'
			}),
		],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: [
						"style-loader",
						"css-loader",
						"sass-loader",
					],
				},
			],
		},
	},
	mode: 'development',
	devServer: {
		port: 8001
	}
};