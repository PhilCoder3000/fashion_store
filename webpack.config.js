const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const pages = ['index'];

module.exports = (env) => {
  const isBuild = env.WEBPACK_BUILD;

  return {
    mode: isBuild ? 'development' : 'production',
    entry: pages.reduce((config, page) => {
      config[page] = `./src/${page}.ts`;
      return config;
    }, {}),
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: isBuild ? '[name].[contenthash].js' : '[name].js',
      clean: isBuild ? true : false,
      assetModuleFilename: 'images/[contenthash][ext]',
    },
    devServer: {
      port: 3000,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.ts(x)?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(s)?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            postCssLoader,
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins: pages
      .map(
        (page) =>
          new HtmlWebpackPlugin({
            inject: 'body',
            template: `./src/${page}.html`,
            filename: `${page}.html`,
            chunks: [page],
          }),
      )
      .concat(
        new MiniCssExtractPlugin({
          filename: isBuild ? '[name].[contenthash].css' : '[name].css',
          chunkFilename: isBuild ? '[name].[contenthash].css' : '[name].css',
        }),
      ),
    performance: {
      hints: false,
    },
  };
};

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 4 major versions'],
        }),
      ],
    },
  },
};
