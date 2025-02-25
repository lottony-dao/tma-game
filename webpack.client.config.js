const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './frontend/src/main.tsx',
    mode: isProduction ? 'production' : 'development',
    output: {
      path: path.resolve(__dirname, 'dist/frontend'),
      filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss'],
      alias: {
        phaser: path.resolve(__dirname, 'node_modules/phaser/dist/phaser.min.js'),
        grammy: path.resolve(__dirname, 'node_modules/grammy'),
      },
      modules: [path.resolve(__dirname, 'frontend'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ],
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [new TerserWebpackPlugin()],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'frontend/assets', to: 'assets' },
          { from: 'frontend/**/*.html', to: '[name][ext]' },
        ],
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist/frontend'),
      compress: true,
      port: 9000,
      hot: true,
      open: true,
    },
    devtool: isProduction ? false : 'source-map',
  };
};
