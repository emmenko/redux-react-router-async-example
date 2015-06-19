var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './lib/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css', { allChunks: true })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader') },
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  },
  cssnext: {
    browsers: 'last 2 versions'
  }
};
