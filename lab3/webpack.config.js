// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [
        // new CleanWebpackPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //       { from: "src/assets", to: "/assets" },
        //     ]
        // }),
        new MiniCssExtractPlugin(),
        // new HtmlWebpackPlugin({  // Also generate a test.html
        //     filename: 'index.html',
        //     template: 'src/pages/index.html'
        //   })
    ],
    // resolve: {
    //     extensions: ['*', '.js', '.jsx'],
    // },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    }
}