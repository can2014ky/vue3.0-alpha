const path = require('path')
const webpack = require('webpack')
const HtmlWepackPlugin = require('html-webpack-plugin')
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
    optimization: {
        usedExports: true, // 模块只导出被使用的成员(按需加载)
        concatenateModules: true, // 尽可能合并每一个模块到一个函数中
        minimize: true, // 压缩输出结果
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
    devServer: {
        hot: true,
        open: true
    },
    plugins: [
        new HtmlWepackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
module.exports = config