const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssLoader = require.resolve("css-loader");
const styleLoader = require.resolve("style-loader");
const stylusLoader = require.resolve("stylus-relative-loader");
const postcssLoader = require.resolve("postcss-loader");
const atImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const mylog = require(`${process.env.HOME}/Documents/utils/mylog.js`);

/*
 * css Loader
 */
const cssQuery = {
  loader: cssLoader,
  options: {
    minimize: true
  }
};
/*
 * postcss Loader
 *
 * Note:
 * - webpack requires an identifier (ident) in options
 * when {Function}/require is used (Complex Options).
 */
const browserslist = ["last 2 versions", "ie >= 9", "> 5%"];
const postcssQuery = {
  loader: postcssLoader,
  options: {
    ident: "postcss",
    plugins: loader => [
      autoprefixer({
        browsers: browserslist
      }),
      atImport({ root: loader.resourcePath }),
      postcssPresetEnv({ browsers: browserslist })
    ]
  }
};
/*
 * stylus Loader
 */
const stylusQuery = {
  loader: stylusLoader
};
const sassQuery = {
  loader: require.resolve("sass-loader")
};
const defaultOptimizeCssOptions = {
  // TODO: optimize-css-assets-webpack-plugin options
  assetNameRegExp: /\.css$/g
  // cssProcessorPluginOptions: {
  //   zindex: false
  // }
};

module.exports = {
  mode: "production",
  entry: {
    main_js: `${__dirname}/src/index.jsx`,
    main_css: `${__dirname}/src/css/main_css.css`,
    main_styl: `${__dirname}/src/css/main_styl.styl`
  },
  // entry: {
  //   new_york_js: "../product-issue/src/client/app-new-york.jsx",
  //   new_york_css: "../product-issue/src/client/styles/base-new-york.styl",
  //   seller_ny_js: "../product-issue/src/client/app-new-york-seller.jsx",
  //   seller_ny_css: "../product-issue/src/client/styles/base-new-york-seller.styl"
  // },
  //   entry: [
  //     `${__dirname}/src/index.js`,
  //     `${__dirname}/src/css/main.css`
  //   ],
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    publicPath: "/js/",
    chunkFilename: "[hash].[name].js",
    filename: `[name].bundle.[hash].js`
  },
  module: {
    rules: [
      // jsRule,
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        // _name: "extract-css",
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: styleLoader,
          use: [cssQuery, postcssQuery],
          publicPath: ""
        })
      },
      {
        // _name: "extract-scss",
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: styleLoader,
          use: [cssQuery, postcssQuery, sassQuery],
          publicPath: ""
        })
      },
      {
        // TODO: this rule is crucial
        // _name: "extract-stylus",
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: styleLoader,
          use: [cssQuery, postcssQuery, stylusQuery], // TODO: cssQuery difference with cssModuleQuery
          publicPath: ""
        })
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=.*)?$/,
        use: [
          {
            // loader: "url-loader?limit=100000",
            loader: "file-loader",
            // options: {
            //   name: "./fonts/[name].[ext]"
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "[name].style.[hash].css" }),
    new OptimizeCssAssetsPlugin(defaultOptimizeCssOptions),
    // new CleanWebpackPlugin([`${__dirname}/dist/**/*.*`], {
    //   root: __dirname,
    //   exclude: [],
    //   verbose: false
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        context: path.resolve("src")
      }
    })
  ]
};
