const webpack = require('webpack');
const merge = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
    },
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
