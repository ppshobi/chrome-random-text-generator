const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: ['./src/index.ts', './src/css/app.scss'],
  mode: 'production',
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },{
        test: /\.(sa|sc|c)ss$/,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "sass-loader",
          ]
        }
      ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', ]
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin([
        {
          from: 'src/manifest.json',
          to: 'manifest.json',
          toType: 'file'
        },
        {
          from: 'src/html',
          toType: 'file'
        }
    ]),
      new MiniCssExtractPlugin({
        filename: "css/app.css",
        chunkFilename: "[id].css"
    }),
  ]
  
};