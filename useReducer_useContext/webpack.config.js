const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry : './app/app.js',
  output : {
    filename : 'bundle.js',
    path : path.resolve(__dirname,'public')
  },
  module: {
    rules : [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        },
        test   : /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'style.css',
      chunkFilename: 'my.css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
}

module.exports = config;

// //{
//   test: /\.css$/i,
//   use: ['style-loader', 'css-loader'],
// }