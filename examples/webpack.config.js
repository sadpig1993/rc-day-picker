var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: './build/js',
    publicPath: '/js/',
    filename: 'main.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.join(__dirname, '../src'),
        path.join(__dirname, './src'),
        path.join(__dirname, '../dist'),
      ],
      loaders: ['babel'],
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 version'],
    }],
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      react: path.resolve(__dirname, '../node_modules/react'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
    }),
  ]
}