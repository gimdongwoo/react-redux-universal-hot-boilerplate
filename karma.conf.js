var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: ['PhantomJS'],

    singleRun: !!process.env.CI,

    frameworks: [ 'mocha' ],

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'mocha' ],

    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-phantomjs-launcher"),
      require("karma-sourcemap-loader")
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url-loader', options: {limit: 10240} },
          { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
          { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
          { test: /\.scss$/, loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss-loader!sass-loader?outputStyle=expanded&sourceMap' }
        ]
      },
      resolve: {
        modules: [
          'src',
          'node_modules'
        ]
      },
      plugins: [
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          __CLIENT__: true,
          __SERVER__: false,
          __DEVELOPMENT__: true,
          __DEVTOOLS__: false  // <-------- DISABLE redux-devtools HERE
        })
      ]
    },

    webpackServer: {
      noInfo: true
    }

  });
};
