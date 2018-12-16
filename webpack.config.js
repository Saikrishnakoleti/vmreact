const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
          test: /\.(css|scss|sass)$/,
          use: ['style-loader','css-loader','sass-loader']
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};