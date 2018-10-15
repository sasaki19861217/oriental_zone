const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  
  // モード development|production|none
  mode: 'development',

  entry: './src/js/main.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    // babel-loaderの設定
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ],
        exclude: /node_modules/,
      },

      // SASS取り込み設定
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true, //圧縮
              sourceMap: true //ソースマップを有効
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true, //ソースマップを有効
              plugins: [
                require('autoprefixer')({
                  grid: true, // CSS Grid Layout を使いたいんだ
                  "browsers": [
                    'last 2 versions',
                    'ie >= 9',
                    'iOS >= 7',
                    'Android >= 4.2'
                  ]
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true //ソースマップを有効
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '/style.css',
    })
  ],
  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    watchContentBase: true,
    open: true
  }
};