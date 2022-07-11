const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PORT = process.env.PORT || 8000

module.exports = {
    devtool: 'source-map',
    target: 'web',
    mode: 'development',
    output: {
        chunkFilename: '[id].chunk.js',
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        allowedHosts: ['*'],
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0',
        port: PORT,
    },
    stats: {
        children: true,
        errorDetails: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            inject: 'body',
        }),
    ],
}
