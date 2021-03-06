const path = require('path')

const options = {
    target: 'web',
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        chunkFilename: '[id].chunk.js',
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        allowedHosts: ['*'],
        contentBase: path.join(__dirname, './src/assets'),
        historyApiFallback: true,
        hot: true,
        hotOnly: true,
        port: 8080,
    },
}

module.exports = options
