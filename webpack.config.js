const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 为了只能提示，写完配置之后要注释掉，node采用CommonJs
// import webpack from 'webpack'

/**
 * @type {webpack.Configuration}
 */
const config = {
    entry: './src/main.js',
    output: {
        filename: 'boundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin()
    ]
}
module.exports = config