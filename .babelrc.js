// function isLegacy() {
//   return process.argv.some(arg => /^--env.legacy$/.test(arg));
// }
// var targets = (function() {
//   var targetsAccepts = [
//     "chrome",
//     "opera",
//     "edge",
//     "firefox",
//     "safari",
//     "ie",
//     "ios",
//     "android",
//     "node",
//     "electron"
//   ];
//   var _targets = {};
//   if (!isLegacy()) {
//     var env = {};
//     Object.entries(process.env).forEach(([k, v]) => {
//       if (!isNaN(parseInt(v))) {
//         env[k.toLowerCase()] = v;
//       }
//     });
//     targetsAccepts.forEach(t => {
//       if (env[t]) _targets[t] = env[t];
//     });
//     if (Object.keys(_targets).length === 0)
//       console.log(
//         `\x1b[33m${"user did not specify '<BROWSER>=<VERSION>' in cli, use default 'targets' option"}\x1b[0m`
//       );
//   }
//   return _targets;
// })();
console.log(".babelrc.js was called");
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
            node: "8"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
      ["@babel/plugin-transform-typescript", {isTSX: true}]
  ]
};

/*
1. webpack needs to output two bundles
- 1 bundle for ES5 (default)
- 1 bundle according to user specify babel preset-env targets
*/
