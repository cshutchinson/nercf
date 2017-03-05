var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: true,
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname + 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()] : [],

  module: {
    loaders: [
    {   test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
