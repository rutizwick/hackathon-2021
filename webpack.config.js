const path = require('path');
// const CodeAnalysisPlugin = require('./webpackPlugins/CodeAnalysisPlugin');
module.exports = [
  {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-modules-typescript-loader' },
            { loader: 'css-loader', options: { modules: true } },
            { loader: 'sass-loader' },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    entry: './src/public/web-component/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'noted-component.bundle.js',
    },
    // plugins:[new CodeAnalysisPlugin()]
  },
];
