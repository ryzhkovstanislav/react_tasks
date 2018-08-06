const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENTRY_PATH = path.resolve(__dirname, 'src');
const OUTPUT_PATH = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'production',
    entry: ['babel-polyfill', path.resolve(ENTRY_PATH, 'index.js')],
    output: {
        path: OUTPUT_PATH,
        filename: 'bundle.js',
    },
    devServer: {
        port: 7777,
        contentBase: OUTPUT_PATH,
        compress: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ENTRY_PATH, 'index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'react',
                            'stage-2',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|svg|woff|woff2|eot|ttf)$/,
                use: ['file-loader'],
            },
        ],
    },
};