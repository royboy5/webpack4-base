const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, '..', 'src/index.js')
    },
    output: {
        filename: './js/[name].bundle.js',
        path: path.resolve(__dirname, '..', 'dist')
    },
    module: {
        rules: [
            // babel-loader
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // css-loader
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'public/index.html')
        })
    ]
}
