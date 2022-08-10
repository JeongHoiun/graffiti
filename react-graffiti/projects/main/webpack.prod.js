const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash:8].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        chunkFilename: 'chunk/[name].[chunkhash:8].js'
    }
});
