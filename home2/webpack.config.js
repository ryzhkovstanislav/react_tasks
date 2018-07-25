const path = require('path');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/index.js',
    devServer: {
        port: 3000,
        contentBase: dist,
        proxy: {
            '/api': 'http://localhost:8000',
        },
    },
    output: {
        path: dist,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg)/,
                use: ['file-loader'],
            },
        ],
    },
};
