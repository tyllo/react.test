import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from '../config';

var plugins = [
  new webpack.optimize.DedupePlugin(),

  new webpack.NoErrorsPlugin(),

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(config.NODE_ENV),
    },
    config: JSON.stringify(config),
  }),
];

config.isProduction && plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
  })
);

// extracts
export let extructCSS = new ExtractTextPlugin(
  `${ config.assets.styles }/${ config.bundleName }.css`,
  {
    allChunks: true,
    disable: config.isDevelope,
  }
);

plugins.push(extructCSS);

export default plugins;
