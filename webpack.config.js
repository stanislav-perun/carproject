const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESlintPlugin = require('eslint-webpack-plugin')

const port = process.env.port || 3300

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: './dist',
        compress: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        port,
        open: true,
    },
    plugins: [
        new ESlintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            scriptLoading: 'defer',
            inject: 'head',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg])$/,
                type: 'asset/resource',
            },
        ],
    },
}
