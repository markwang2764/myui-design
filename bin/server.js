const webpack = require('webpack')
const webpackOptions = require('../build/webpack.dev')
const compiler = webpack(webpackOptions)
const express = require('express')
const app = express()

var proxy = require('http-proxy-middleware')

const devMiddlerware = require('webpack-dev-middleware')
const hotMiddlerware = require('webpack-hot-middleware')

const chalk = require('chalk')
const histroyApiFallback = require('connect-history-api-fallback')

const devServer = require('../devServerConfig').devServer
const opn = require('opn')


app.use(histroyApiFallback({
  index: '/index.html',
  htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
}));

app.use(devMiddlerware(compiler, {
  publicPath: webpackOptions.output.publicPath,
  stats: 'errors-only',
  logLevel: 'silent', // 隐藏log日志
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
}))

app.use(hotMiddlerware(compiler));
app.use(express.static('../static'));
app.use(express.static('../public'));
var options = {
  target: devServer.target, // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {'/api/' : '/'},
  onProxyReq: (proxyReq, req, res) => {
    if(devServer.apilog){
      console.log(chalk.bold.rgb(208, 164, 86)('转发请求 ====> ' + devServer.target + proxyReq.path))
    }
  }
}

app.use('/api', proxy(options))


let browserUrl = `${devServer.host}:${devServer.port}`

opn(`${browserUrl}`);
app.listen(devServer.port)
