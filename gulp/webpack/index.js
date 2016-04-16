import path from 'path';
import autoprefixer from 'autoprefixer';

import config from '../config';
import loaders, { cssLoader } from './webpack.loaders';
import plugins from './webpack.plugins';

export default {

  context: path.resolve(config.src),

  resolve: {
    root: [
      path.resolve(config.src),
      path.resolve('./node_modules/'),
    ],
    alias: {
    },
    extensions: ['', '.js', '.jsx']
  },

  output: {
    publicPath: config.isDevelope ? 'http://localhost/' : '',
    filename: config.assets.scripts + '/[name].js',
    chunkFilename: config.assets.scripts + '/[name]-[id].js',
  },

  watch: config.isDevelope,

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /\/node_modules\//
      },
    ],

    loaders: loaders,
  },

  plugins: plugins,

  postcss: () => [
    autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false,
    }),
  ],

  cssLoader,

  sassLoader: {
    sourceMap: config.isDevelope,
  },

  devtool: config.isDebug ? 'source-map' : false,
};
