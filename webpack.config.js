const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        app: './app/main.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: './[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: true
        })
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
        ]
    }
};