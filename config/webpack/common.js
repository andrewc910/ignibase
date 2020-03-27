const webpack = require('webpack');
const path = require('path');

let config = {
  entry: {
    'main.bundle.js': './frontend-react/index.js',
    'main.bundle.css': './frontend-react/index.css'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, '../../public/dist'),
    publicPath: '/dist'
  },
  devServer: {
    contentBase: path.join(__dirname, '../../public/dist'),
    compress: true,
    port: 9090,
    after: function(app, server, compiler) {
      console.log('Webpack Reloaded')
    }
  },
  resolve: {
    alias: {
      amber: path.resolve(__dirname, '../../lib/amber/assets/js/amber.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          'file-loader?name=/[name].[ext]'
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  stats: 'errors-only'
};

module.exports = config;
