/**
for webpack:
npm i webpack webpack-cli webpack-dev-server --save-dev

for simple webpack config
npm i autoprefixer@^9.6.0 babel-loader@^8.0.4 css-loader@^2.1.1 file-loader@^4.2.0 postcss-import@^12.0.1 postcss-loader@^3.0.0 postcss-preset-env@^6.7.0 url-loader@^2.1.0 --save-dev

for babel:
rest `@babel/*` and `babel-*` packages

*/

const babelLoader = require.resolve("babel-loader");
const cssLoader = require.resolve("css-loader");
const postcssLoader = require.resolve("postcss-loader");
const atImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const fileLoader = require.resolve("file-loader");
const urlLoader = require.resolve("url-loader");

module.exports = {
  mode: "production",
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
  }
};
