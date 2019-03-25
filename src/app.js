const webpack = require("webpack");
const webpackConfig = require("../webpack.config");
webpack(webpackConfig({ legacy: true, mode: "development" }), err => {
  if (err) throw err;
  console.log("legacy built");
});
webpack(webpackConfig({ mode: "development" }), err => {
  if (err) throw err;
  console.log("es6 built");
  // need to remove static files
});
