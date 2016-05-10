var webpack    = require("webpack");
var HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./dist",
    filename: "main.js",
  },

  devtool: "inline-source-map",

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015"],
          plugins: ["transform-object-assign"],
        },
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLPlugin({ title: "Stepper" }),
  ]
};
