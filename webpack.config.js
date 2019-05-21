const path = require('path');
const filewatcherPlugin = require("filewatcher-webpack-plugin");

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
  },
  watchOptions: {
    poll: 1000 // Check for changes every second
  },
  plugins: [
    new filewatcherPlugin({watchFileRegex: ['talks/**/*.haml', '_assets/js/**/*.js'], awaitWriteFinish: true})
  ]
};
