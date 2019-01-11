const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    }, {
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
      ],
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    }],
  },
  devServer: {
    hot: true,
  },
};