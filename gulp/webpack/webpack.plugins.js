import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from '../config';

// extracts CSS
export let extructCSS = new ExtractTextPlugin(
  `${ config.assets.styles }/${ config.bundleName }.css`, {
    allChunks: true,
    disable: config.isDevelope,
  }
);

var plugins = [
  extructCSS,
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(config.NODE_ENV) },
    config: JSON.stringify(config),
  }),
];

config.isDevelope && plugins.push(
  new webpack.HotModuleReplacementPlugin(),
);

config.isProduction && plugins.push(
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    output: { comments: false },
    compress: { warnings: false },
  }),
);

export default plugins;
