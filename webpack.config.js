const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, '_assets/js', 'index.js'),
    talk: [
      path.resolve(__dirname, '_assets/js', 'talk.js'),
    ]
  },
  output: {
    filename: '[name]-bundle.js',
    path: __dirname + '/_site/assets/js'
  }
};
