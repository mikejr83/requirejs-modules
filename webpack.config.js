const path = require('path');

var webpackConfig = {
  devtool: 'source-map',
  context: path.resolve(__dirname),
  entry: './ng-lib',
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
    modules: [
      './node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      './node_modules'
    ]
  },
  output: {
    path: path.join(__dirname, "assets/js"),
    filename: 'ng-app.js',
    library: 'ngMe',
    libraryTarget: 'amd'
  },
  externals: [

  ],
  module: {
    rules: [{
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          /\/node_modules\//
        ]
      },
      {
        enforce: 'pre',
        test: /\.ts(x?)$/,
        use: 'ts-loader'
      }
    ]
  }
};

module.exports = webpackConfig;
