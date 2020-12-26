const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack');


console.log('开始加载webpack.config.js');
module.exports = {
    // entry: path.resolve(__dirname, 'src/index.js'),
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "js/[name].[hash].js",
        pathinfo: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {test: /.txt$/, use: 'raw-loader'},
            {test: /.css$/, use: 'css-loader'},
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.ProvidePlugin({
            _: 'lodash'
        })
    ],
    mode: 'production'
}
