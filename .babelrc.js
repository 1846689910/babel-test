console.log("babelrc called");
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: 65,
          node: "8"
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-proposal-class-properties"
  ]
};
