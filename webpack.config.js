const path = require('path');

module.exports = {
  mode: 'production',
  watch: true,
  entry: path.resolve(__dirname, '_assets/js', 'index.js'),
  output: {
    filename: '[name]-bundle.js',
    path: __dirname + '/_site/assets/js'
  }
};
