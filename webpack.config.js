let path = require("path");

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'index.min.js',
    library: "Timer",
  },
  resolve: {
    extensions: ['.js']
  },
  module: {},
  externals: [''],
  plugins: [
  ]
}