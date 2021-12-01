var path = require('path');
const webpack = require('webpack');
const {override, babelInclude} = require('customize-cra');

const ignorePlugin = new webpack.IgnorePlugin({
  checkResource(resource) {

    const lazyImports = [
      '@nestjs/microservices',
      // ADD THIS
      '@nestjs/microservices/microservices-module',
      '@nestjs/websockets',
      // AND THIS
      '@nestjs/websockets/socket-module',
      '@nestjs/platform-express',
      'cache-manager',
      'class-validator',
      'class-transformer',
      'class-transformer/cjs/storage',
      'react-native-sqlite-storage'
    ];

    if (!lazyImports.includes(resource)) {
      return false;
    }
    try {
      require.resolve(resource);
    } catch (err) {
      return true;
    }
    return false;
  },
});

module.exports = function (config, env) {

  config.plugins = config.plugins.concat(ignorePlugin);
  return config;


}
// module.exports = function (config, env) {
//     return Object.assign(
//         config,
//         override(
//             babelInclude([
//                 /* transpile (converting to es5) code in src/ and shared component library */
//                 path.resolve('src'),
//                 path.resolve('../'),
//             ])
//         )(config, env)
//     )
// }
