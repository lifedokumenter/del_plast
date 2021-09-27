// right at the top of the file where you are declaring all other plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  plugins: [{ plugin: require('@semantic-ui-react/craco-less') }],
  resolve: {
    alias: {
      "../../theme.config$": path.join(__dirname, "/semantic-ui/theme.config"),
      "../semantic-ui/site": path.join(__dirname, "/semantic-ui/site")
    }
  },
  module: {
    rules: [
      // other files' rules
      // less
      {
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        }),
        test: /\.less$/
      }, 
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  }
}