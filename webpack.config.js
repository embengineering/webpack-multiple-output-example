var webpack = require('webpack');
var path = require('path');

var config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    ComponentA: './ComponentA.jsx',
    ComponentB: './ComponentB.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, 'src')
  }
};

module.exports = config;