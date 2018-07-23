const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './app/index.js',
        vender: [
            'moment',
            'lodash'
        ]
    },
    mode: 'development',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:3000/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use : [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use : [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        // new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('styles.css')
    ],
    devtool: "cheap-eval-source-map",
    devServer: {
        publicPath:'/dist/',
        port: 3000
    }
}