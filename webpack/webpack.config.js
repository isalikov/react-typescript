const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack')
const { merge: webpackMerge } = require('webpack-merge')

const isDevelopment = process.env.NODE_ENV !== 'production'

const options = {
    mode: 'none',
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.html', '.styl'],
        modules: ['node_modules', 'src'],
    },
    resolveLoader: {
        modules: ['node_modules', 'src'],
    },
    entry: {
        main: ['./src/main.ts'],
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: require.resolve('babel-loader'),
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel'),
                        ].filter(Boolean),
                    },
                }],
            },
            {
                test: /\.styl/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            compileType: 'module',
                            exportLocalsConvention: 'camelCase',
                            localIdentName: isDevelopment
                                ? '[path][name]__[local]'
                                : '[hash:base64]',
                        },
                    },
                }, {
                    loader: 'stylus-loader',
                }],
            },
            {
                test: /\.css/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: 'src/assets',
                to: '',
                globOptions: {
                    ignore: ['.gitkeep', '**/.DS_Store', '**/Thumbs.db'],
                },
            }],
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            inject: 'body',
        }),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        isDevelopment && new HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
}

module.exports = isDevelopment
    ? webpackMerge(options, require('./webpack.dev'))
    : webpackMerge(options, require('./webpack.dist'))
