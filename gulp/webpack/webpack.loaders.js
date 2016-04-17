import path from 'path';
import { extructCSS } from './webpack.plugins';
import config from '../config';

export let cssLoader = {
  sourceMap: config.isDevelope,
  modules: true,
  importLoaders: true,
  localIdentName: config.isDevelope ? '[path]-[local]-[hash:5]' : '[hash:5]',
};

function toQuery(obj) {
  return Object.keys(cssLoader).reduce((prev, cur) => {
    return `${ prev }&${ cur }=${ cssLoader[cur] }`;
  }, '?key');
}

var loaders = {};

loaders.js = {
  test: /\.jsx?$/,
  exclude: [/\/node_modules\//, /\/bower_components\//],
  loaders: ['babel']
};

loaders.sass = {
  test: /\.(sass|scss|css)$/,
  loader: extructCSS.extract('style', [
    'css?' + toQuery(cssLoader),
    'postcss',
    'sass'
  ])
};

loaders.template = {
  test: /\.jade$/i,
  loader: 'jade-react',
};

loaders.url = {
  test: /.*\.(gif|png|jpe?g|svg)$/i,
  // include: [/images/],
  loader: 'url',
  query: {
    limit: 1 * 1024,
    name: config.isDevelope
      ? config.assets.images + '/[name].[ext]'
      : config.assets.images + '/[name]-[hash:5].[ext]',
  },
};

export default [
  loaders.js,
  loaders.sass,
  loaders.template,
  loaders.url,
];
