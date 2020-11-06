const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "bundle.js"
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
            }
        ]
    }, plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    mode: 'production'
}