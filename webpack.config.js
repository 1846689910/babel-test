const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// const {entry, jsRule} = (() => {
//     const entry = {};
//     const jsRule = {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//     };
//     if (process.env.babelEnvTargets) {
//         const oneOf = [];
//         const babelEnvTargets = JSON.parse(process.env.babelEnvTargets);
//         Object.entries(babelEnvTargets).forEach(([k, v]) => {
//             entry[k] = ["@babel/polyfill", `${__dirname}/src/index.js?${k}`];
//             oneOf.push({
//                 resourceQuery: new RegExp(k),
//                 use: [
//                     {
//                         loader: "babel-loader",
//                         options: {
//                             presets: [
//                                 ["@babel/preset-env", {
//                                     targets: v
//                                 }]
//                             ]
//                         }
//                     }
//                 ]
//             });
//         });
//         jsRule.oneOf = oneOf;
//     } else {
//         entry.main = `${__dirname}/src/index.js`;
//         jsRule.use = [
//             {
//                 loader: "babel-loader",
//                 options: {
//                     presets: [
//                         ["@babel/preset-env"]
//                     ]
//                 }
//             }
//         ];
//     }
//     return {entry, jsRule};
// })();

module.exports = env => ({
  mode: env.mode,
  entry: `${__dirname}/src/index.js`,
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: env.legacy ? "./[name]/bundle.js" : `./es6/[name]/bundle.js`
  },
  module: {
    rules: [
      // jsRule,
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  Object.assign({}, env.legacy ? {} : {
                    targets: {
                      chrome: 65
                    }
                  })
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
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
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([`${__dirname}/dist/*`], {
      root: __dirname,
      exclude: [],
      verbose: false
    })
  ]
});
