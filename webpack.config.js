const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/canvas.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/canvas.bundle.js',
  },
  
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|mp3)$/,
        loader: 'file-loader',
      },
      // Add a new rule for MP4 files using url-loader
      {
        test: /\.mp3$/,
        loader: 'file-loader'
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      files: ['./dist/*'],
      notify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: 'favicon.ico',
      template: 'src/index.html',
    }),
  ],
  watch: true,
  devtool: 'source-map',
};
