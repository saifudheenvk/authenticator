const path = require('path');

module.exports = {
  mode: 'development',
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@redux-toolkit': path.resolve(__dirname, 'src/redux-toolkit'),
      '@root': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx'];
      return webpackConfig;
    },
  },
};
