var webpack = require('webpack');
var path = require('path');


module.exports = {
  entry: {
      index: __dirname + '/src/index.js',
      selectedDays: __dirname + '/src/selectedDays/',
      rangeOfDays: __dirname + '/src/rangeOfDays/',
      disabledDays: __dirname + '/src/disabledDays/',
      canChangeMonth: __dirname + '/src/canChangeMonth/',
      year: __dirname + '/src/year/',
      fixWeek: __dirname + '/src/fixWeek/',
      restrictMonth: __dirname + '/src/restrictMonth/',
      modifiers: __dirname + '/src/modifiers/'
  },
  output: {
        path: path.join(__dirname, '/js'),
        filename: '[name].js'
    },
  module: {
  	loaders:[
  		{
  			test: /\.js$/,
  			loaders: ['babel']

  		},
  		{
  			test: /\.css$/,
  			loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 version']
        // loaders: ['style', 'css']
  		},
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        loader: 'url?limit=10000&name=img/[name].[ext]'
      }
  	]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      }
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     //supresses warnings, usually from module minification
    //     warnings: false
    //   }
    // })
  ]
}