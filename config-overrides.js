const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = function override(config, env) {
  if (env === 'development') {
    config.plugins.push(new ReactRefreshWebpackPlugin());
    config.module.rules[1].oneOf[2].options.plugins.push(require.resolve('react-refresh/babel'));
  }
  return config;
};
