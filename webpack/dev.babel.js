const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');

const dllPath = path.join(process.cwd(), 'node_modules', 'app-dll')
const manifestPath = path.join(dllPath, 'vendor-manifest.json');

module.exports = {
  entry: {
    main: [
      // listen to code updates emitted by hot middleware:
      'webpack-hot-middleware/client',
      // your code:
      path.join(process.cwd(), 'app', 'index.js'),
    ]
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react-hmre'],
          cacheDirectory: true
        },
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require(manifestPath),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      templateContent: templateContent(),
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    modules: ['app', 'node_modules']
  }
};

function templateContent() {
  const html = fs.readFileSync(
    path.resolve(process.cwd(), 'app', 'index.html')
  ).toString();

  const doc = cheerio(html);
  const body = doc.find('body');
  body.append(`<script type="text/javascript" src='/vendor.dll.js'></script>`)
  return doc.toString();
}
