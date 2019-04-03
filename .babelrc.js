module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
            chrome: 72
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
