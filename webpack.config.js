const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
console.log('开始加载webpack.config.js');
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "js/[name].[hash].js",
        pathinfo: true
    },
    module: {
        rules: [
            {test: /.txt$/, use: 'raw-loader'},
            {test: /.css$/, use: 'css-loader'},
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            }/*,
            {
                test: /\.(jpg|png|jpeg)$/,
                use: ['url-loader'],
                options: {
                    limit: 1000
                }
            }*/
        ]
    }, plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    mode: 'production'
}