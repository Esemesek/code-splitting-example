const path = require('path');

module.exports = {
    entry: {
        main: "./src"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    devServer: {
        compress: true,
        port: 9000
    }
}
