// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/index.html'), //
            filename: 'index.html', // ім'я вихідного файлу
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/about.html'), //
            filename: 'about.html', // ім'я вихідного файлу
        }),
        new CleanWebpackPlugin(),
    ],
}