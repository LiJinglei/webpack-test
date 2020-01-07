const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
    entry: './src/script/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /.txt$/, use: 'raw-loader'},
            {test: /.css$/, use: 'css-loader'},
        ]
    }, plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ]
}