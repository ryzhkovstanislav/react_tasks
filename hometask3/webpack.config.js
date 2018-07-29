const path = require('path');

const ENTRY_FILE_PATH = path.resolve(__dirname, 'src', 'index.js');
const OUTPUT_PATH = path.resolve(__dirname, 'dist');

module.exports = {
    entry: ENTRY_FILE_PATH,
    output: {
        path: OUTPUT_PATH,
        filename: "bundle.js",
    },
    devServer: {
        port: 7777,
        contentBase: OUTPUT_PATH,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'react', 'stage-2'],
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
};
