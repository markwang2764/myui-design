const webpack = require("webpack")
const baseConfig = require("./webpack.base")
const {smart} = require('webpack-merge')
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const path = require('path')

const resolve = str => path.resolve(__dirname, str) 
const dev = require("../devServerConfig").devServer

module.exports = smart(baseConfig, {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    entry: {
        // main: ['webpack-hot-middleware/client?reload=true', resolve("../src/index.js")]
        main: resolve("../src/index.js")
    },
    output: {
        publicPath: '/'
    },
    module: {
     rules: [
        {
            test: /\.(less|css)$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "postcss-loader"
                },
                {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true
                    }
                }
            ]
        },
     ]   
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`Your application is running here: ${dev.host}:${dev.port}`],
                notes: [`如果浏览器没有主动打开， 请输入：${dev.host}:${dev.port}`]
            },
            // should the console be cleared between each compilation? default is true
            clearConsole: true
        }),
        new webpack.DefinePlugin({
            "NICE": JSON.stringify(true),
            DEVELEPMENT: JSON.stringify(true),
            PRODUCTION: JSON.stringify(false),
            PRODUCTION_IS_OPEN_DEBUG: JSON.stringify(true)
        }),
    ]
})