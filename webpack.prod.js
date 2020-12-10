const path = require("path");
const webpack = require("webpack");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPLugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WorkBoxPLugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/client/index.js",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({}), new CssMinimizerPLugin({})],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/transform-runtime"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CleanWebpackPlugin(),
    new WorkBoxPLugin.GenerateSW(),
  ],
};
