const webpack = require('webpack');

module.exports = {

    entry: {
        'stein': __dirname + '/src/index.js',
        'stein.min': __dirname + '/src/index.js',
    },
    output: {
        path: __dirname + '/lib',
        filename: '[name].js',
        library: 'stein',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: require.resolve('./src/Router'),
                use: {
                    loader: 'expose-loader',
                    options: 'Router',
                }
            },
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
