const webpack = require('webpack');
const filter = require('lodash/filter')
const path = require('path');
const pkg = require('../package.json');

const outputPath = path.join(process.cwd(), 'node_modules', 'app-dll')

module.exports = {
  context: process.cwd(),
  entry: filter(Object.keys(pkg.dependencies), function (key) { return key !== 'font-awesome' }),
  devtool: 'eval',
  output: {
    filename: 'vendor.dll.js',
    path: outputPath,
    publicPath: '/',
    library: 'vendor',
  },
  plugins: [
    new webpack.DllPlugin({
      name: 'vendor',
      path: path.join(outputPath, 'vendor-manifest.json'),
    }),
  ],
};
