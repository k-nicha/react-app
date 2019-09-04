const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'src'),
      filename: 'bundle.js',
      publicPath: '/src/'
    },

    devServer: {
      contentBase: path.join(__dirname, 'src'),
      compress: true,
      port: 8080,
      publicPath: '/src/'
    }
};