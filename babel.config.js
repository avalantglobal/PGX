module.exports = {
  presets: [["@babel/preset-env", { targets: "> 0.25%, not dead" }]],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-template-literals",
    ["@babel/proposal-decorators", { decoratorsBeforeExport: true }]
  ]
};
