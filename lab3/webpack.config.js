// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const CopyPlugin = require("copy-webpack-plugin");

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
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
              { from: "src/assets", to: "assets" },
            ]
        })
    ],
}