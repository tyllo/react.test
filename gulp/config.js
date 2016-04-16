import { debug, develope, production } from './helpers/getArg';
import packageInfo from '../package.json';

var src = './src';
var dest = production ? './build' : './dist';

export default {
  package: packageInfo,
  src: src,
  dest: dest,
  modules: src,
  bundleName: 'main',

  templates: {
    src: src + '/templates/index.jade',
    watch: src + '/templates/**/*.jade',
  },

  assets: {
    images: 'assets/images',
    scripts: 'assets/scripts',
    styles: 'assets/styles',
  },

  isProduction: production,
  isDevelope: develope,
  isDebug: debug,
};
