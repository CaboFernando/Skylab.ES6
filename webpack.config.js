module.exports = {
    entry: './2-Webpack Server/main.js',
    output: {
        path: __dirname,
        filename: './2-Webpack Server/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
};