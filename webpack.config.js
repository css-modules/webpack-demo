var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var postcssImport = require('postcss-import');
var path = require('path');

module.exports = {

  entry: {
    ie: ['./src/ie.js'],
    bundle: ['./src/index.js']
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'url-loader?limit=10000&name=fonts/[name].[ext]' }
    ]
  },

  postcss: (webpack) => {
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      require('postcss-simple-vars')(),
      require('autoprefixer')({
        browsers: ['last 2 versions', 'IE > 8']
      }),
      require('postcss-reporter')({
        clearMessages: true
      })
    ];
  },

  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },

  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false
    })
  ]
};
