const chalk = require("chalk")
const webpack = require('webpack')

const webpackConfig = require('../build/webpack.prod')
webpack(webpackConfig, (err, stats) =>{
    if (err) throw err
    process
    .stdout
    .write(stats.toString({colors: true, modules: false, children: false, chunks: false, chunkModules: false}) + '\n\n')
    console.log(chalk.cyan("Build Complete."));
        // 打包具体项目时才执行自动上传，避免一次性把工程里的所有资源都同步上去了 if (args[0]) {   // 自动上传cdn资源   const
    // uploader = new OssUpload({     dir: path.join(__dirname, '../dist/'),
    // originDir: config.build.cdnDir   });   uploader.start(); } else {
})