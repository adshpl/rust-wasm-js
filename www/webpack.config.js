const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './main.js',
  mode: 'development',
  output: {
    path: outputPath,
    filename: 'main.js',
  },
  experiments: {
    syncWebAssembly: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: 'index.html',
        to: 'index.html',
      }],
    }),
  ],
};
