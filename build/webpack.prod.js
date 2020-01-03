const webpack = require('webpack')
const {smart} = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require("./webpack.base")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpackBuildNotifier = require('webpack-build-notifier')

const path = require('path')
const resolve = str => path.resolve(__dirname, str) 
const time = (function () {
        var date = new Date();
        var Y = date.getFullYear();
        var M = date.getMonth() + 1;
        var D = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        function addZero(num) {
            return num > 9
                ? num
                : '0' + num;
        }
        return [Y, addZero(M), addZero(D), addZero(h), addZero(m)].join('');
    })();


module.exports = smart(baseConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
    entry: {
        main: resolve("../src/index.js"),
        vendor: [
            "react",
            "react-dom",
            "axios",
            "redux",
            "react-redux"
        ],
    },
    output: {
        path: resolve('../dist'),
        filename: `[name].[${time}].js`,
        chunkFilename: 'chunks/[name].[chunkhash].min.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /(\.less|\.css)$/,
                exclude: /node_modules|antd\.less/,
                use: ExtractTextPlugin.extract({
                  fallback: {
                    loader: 'style-loader',
                    options: {
                      insertAt: 'top'
                    }
                  },
                  use: [
                    {
                      loader: 'css-loader',
                    },
                    {
                      loader: 'postcss-loader'
                    },
                    {
                      loader: 'less-loader',
                      options: {
                        outputStyle: 'expanded',
                        javascriptEnabled: true
                      }
                    }
                  ]
                })
              },
              {
                test: /(\.less|\.css)$/,
                include: /node_modules|antd\.less/,
                use: ExtractTextPlugin.extract({
                  fallback: {
                    loader: 'style-loader',
                    options: {
                      insertAt: 'top'
                    }
                  },
                  use: [
                    {
                      loader: 'css-loader',
                    },
                    {
                      loader: 'postcss-loader'
                    },
                    {
                      loader: 'less-loader',
                      options: {
                        outputStyle: 'expanded',
                        javascriptEnabled: true
                      }
                    }
                  ]
                })
              }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all', //默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
            minSize: 30000, //合并前模块文件的体积
            minChunks: 1, //最少被引用次数
            cacheGroups: {
                vendors: {
                    chunks: 'all', //同外层的参数配置，覆盖外层的chunks，以chunk为维度进行抽取
                    test: /[\\/]node_modules[\\/]/, //可以为字符串，正则表达式，函数，以module为维度进行抽取
                    minChunks: 1, //最少被几个chunk引用
                    priority: -10, //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
                }
            }
        },
    
        runtimeChunk: true,
        // 它的作用是将包含chunks 映射关系的 list单独从 app.js里提取出来，因为每一个 chunk 的 id 基本都是基于内容 hash
        // 出来的，所以你每次改动都会影响它，如果不将它提取出来的话，等于app.js每次都会改变。缓存就失效了。
    
        minimize: true
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),//给模块使用次数排序
        new ExtractTextPlugin({filename: `[name].[${time}].css`, allChunks: true}),
        new CleanWebpackPlugin(),
        new webpackBuildNotifier(),

        /*
        使用文件路径的 hash 作为 moduleId。
        因为 chunk 内部的每个 module 都有一个 id，webpack 默认使用递增的数字作为 moduleId。
        如果引入了一个新文件或删掉一个文件，可能会导致其他文件的 moduleId 也发生改变，
        那么受影响的 module 所在的 chunk 的 [chunkhash] 就会发生改变，导致缓存失效。
        因此使用文件路径的 hash 作为 moduleId 来避免这个问题。
        */
        new webpack.HashedModuleIdsPlugin(),
        // new OptimizeCSSPlugin({   cssProcessorOptions:
        // config.build.productionSourceMap ? { safe: true, map: { inline: false } } : {
        // safe: true } })
    ]
})

