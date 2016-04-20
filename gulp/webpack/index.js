import path from 'path';
import autoprefixer from 'autoprefixer';

import config from '../config';
import loaders, { cssLoader } from './webpack.loaders';
import plugins from './webpack.plugins';

export default {
  cache: true,

  context: path.resolve(config.src),

  entry: [
    `webpack-dev-server/client?http://0.0.0.0:${ config.server.port }`,
    'webpack/hot/only-dev-server',
    `./${ config.bundleName }`,
  ],

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
    path: path.resolve(config.dest),
    publicPath: config.isDevelope ? `http://localhost:${ config.server.port }/` : '',
    filename: config.assets.scripts + '/[name].js',
    chunkFilename: config.assets.scripts + '/[name]-[id].chunk.js',
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

  devServer: {
    port: config.server.port,
    hot: true,
    inline: true,
    contentBase: config.dest,
    historyApiFallback: true,
    // compress: config.isDebug,
    // quiet: true,
    open: true,
    stats: { colors: true },
  },
};
