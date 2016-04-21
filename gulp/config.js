import { isDebug, isDevelope, isProduction } from './helpers/getArg';
import packageInfo from '../package.json';

var src = './src';
var dest = isProduction ? './build' : './dist';

export default {
  package: packageInfo,
  src: src,
  dest: dest,
  modules: src,
  bundleName: 'main',
  copy: [
    src + '/templates/*.json'
  ],

  templates: {
    src: src + '/templates/index.jade',
    watch: src + '/templates/**/*.jade',
  },

  assets: {
    path: 'assets',
    images: 'assets/images',
    scripts: 'assets/scripts',
    styles: 'assets/styles',
  },

  server: {
    port: 8080,
  },

  isProduction,
  isDevelope,
  isDebug,
  NODE_ENV: isProduction ? 'production' : 'develope',
};
