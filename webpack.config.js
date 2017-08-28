const path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'bundlezzz.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
      loaders: [
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
  }
};
