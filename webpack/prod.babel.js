const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');

const dllPath = path.join(process.cwd(), 'node_modules', 'app-dll')
const manifestPath = path.join(dllPath, 'vendor-manifest.json');

module.exports = {
  entry: {
    main: path.join(process.cwd(), 'app', 'index.js'),
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, 
      {
        test: /\.css$/,
        exclude: /app/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { 
        test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    modules: ['app', 'node_modules']
  },  
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(process.cwd(), 'app', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
};
