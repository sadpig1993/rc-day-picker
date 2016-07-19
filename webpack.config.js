var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./DayPicker.js",
  output: {
      path: path.join(__dirname, '/dist/'),
      filename: 'DayPicker.js'
  },
  devtool: "source-map",
  module: {
  	loaders:[
  		{
  			test: /\.js$/,
  			loaders: ['babel']

  		},
  		{
  			test: /\.css$/,
  			loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 version']
  		},
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        loader: 'url?limit=10000&name=img/[name].[ext]'
      }
  	]
  }
}
