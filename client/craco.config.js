const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (env === 'development') {
        webpackConfig.plugins.push(new ReactRefreshWebpackPlugin());
        webpackConfig.module.rules[1].oneOf[2].options.plugins.push(require.resolve('react-refresh/babel'));
      }
      return webpackConfig;
    },
  },
};
