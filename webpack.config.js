const webpack = require('webpack');

const libName = 'stein';

const config = {

    output: {
        path: __dirname + '/lib',
        filename: '[name].js',
        library: libName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ],
};


// Set the entry points
config.entry = {};
config.entry[libName] = __dirname + '/src/index.js';
config.entry[`${libName}.min`] = __dirname + '/src/index.js';

module.exports = config;
