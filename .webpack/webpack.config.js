const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { merge: webpackMerge } = require('webpack-merge')

const isDevelopment = process.env.NODE_ENV !== 'production'

const options = {
  mode: 'none',
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, '../src/app'),
      '@lib': path.resolve(__dirname, '../src/lib'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.html'],
    modules: ['node_modules', 'src'],
  },
  resolveLoader: {
    modules: ['node_modules', 'src'],
  },
  entry: {
    main: ['@babel/polyfill', './src/main.ts'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: isDevelopment
                  ? '[path][name]__[local]'
                  : '[hash:base64]',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: '',
          globOptions: {
            ignore: ['.gitkeep', '**/.DS_Store', '**/Thumbs.db'],
          },
        },
      ],
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
}

module.exports = isDevelopment
  ? webpackMerge(options, require('./webpack.dev'))
  : webpackMerge(options, require('./webpack.dist'))
