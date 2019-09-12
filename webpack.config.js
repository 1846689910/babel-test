"use strict";
/**
for webpack:
npm i webpack webpack-cli webpack-dev-server --save-dev

for simple webpack config
npm i autoprefixer@^9.6.0 babel-loader@^8.0.4 css-loader@^2.1.1 file-loader@^4.2.0 postcss-import@^12.0.1 postcss-loader@^3.0.0 postcss-preset-env@^6.7.0 url-loader@^2.1.0 --save-dev

for babel:
rest `@babel/*` and `babel-*` packages

*/
const Path = require("path");
const babelLoader = require.resolve("babel-loader");
const cssLoader = require.resolve("css-loader");
const postcssLoader = require.resolve("postcss-loader");
const atImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const fileLoader = require.resolve("file-loader");
const urlLoader = require.resolve("url-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: { main: [Path.resolve("src/client/js/index.js")] }, // with polyfill: { main: ["core-js", "regenerator-runtime/runtime", "src/client/js/index.js"] }
  output: {
    path: Path.resolve("dist/js"),
    publicPath: "/js/",
    chunkFilename: "[hash].[name].js",
    filename: "[name].bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: [babelLoader]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" }
          },
          {
            loader: cssLoader
          },
          {
            loader: postcssLoader,
            options: {
              ident: "postcss",
              plugins: loader => [
                autoprefixer(),
                atImport({ root: loader.resourcePath }),
                postcssPresetEnv()
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)(\?\S*)?$/i,
        use: [
          {
            loader: fileLoader,
            options: {
              limit: 10000,
              name() {
                return "[name].[ext]";
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2)(\?\S*)?$/i,
        use: [
          {
            loader: urlLoader,
            options: {
              limit: 1000,
              mimetype: "application/font-woff"
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf)(\?\S*)?$/i,
        use: [fileLoader]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].style.[hash].css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        zindex: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        context: Path.resolve("src")
      }
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      name: process.env.NODE_ENV !== "production", //  set splitChunks.name to false for production builds so that it doesn't change names unnecessarily
      chunks: "all", // split code in app and node_modules into bundle and vendor.bundle.js
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        // keep splitting the node_module chunks
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace("@", "")}`;
          }
        },
        // includes all code shared between entry points
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  }
};
