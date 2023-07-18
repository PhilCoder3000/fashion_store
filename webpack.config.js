const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const pages = ['index'];

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

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

  const plugins = [
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isDev ? '[name].css' : '[name].[contenthash].css',
    }),
  ].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: 'body',
          template: `./src/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        }),
    ),
  );

  let optimization = {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [['optipng', { optimizationLevel: 3 }]],
          },
        },
      }),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
            unsafe: true,
            unused: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  };

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    optimization = undefined;
  }

  return {
    mode: argv.mode || 'development',
    entry: pages.reduce((config, page) => {
      config[page] = `./src/${page}.ts`;
      return config;
    }, {}),
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      clean: true,
    },
    devServer: {
      port: 3000,
      open: true,
    },
    module: {
      rules: [
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
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins,
    performance: {
      hints: false,
    },
    optimization,
  };
};
