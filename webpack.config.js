const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack'); // only add this if you don't have yet
const deps = require('./package.json');

const { ModuleFederationPlugin } = webpack.container;
module.exports = {
  entry: './src/main.ts',
  output: {
    publicPath: 'auto',

  },
  mode: 'development',
  devServer: {
    port: 9000,
    open: true,
  },
  devtool: 'source-map',
  module: {
    rules: [

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },

      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',

        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: 'pomodoro',
      filename: 'remoteEntry.js',
      library: { name: 'pomodoro', type: 'var' },
      exposes: { './Pomodoro': './src/bootstrap.ts' },
      shared: deps.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './dist/index.html',
    }),
  ],
  resolve: {
    extensions: ['.vue', '.ts', '.js'],
  },
};
