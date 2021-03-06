var webpack = require('webpack');
require('babel-loader');
require('json-loader');

module.exports = {
    entry: {
        keo: ['./src/keo.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
	    library: 'keo',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};
