const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const speedMeasurePlguin = require("speed-measure-webpack-plugin");
const progressBarWebpackPlugin = require("progress-bar-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const HappyPack = require("happypack");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length
});
const chalk = require("chalk");
const resolve = str => path.resolve(__dirname, str);

module.exports = {
  resolve: {
    alias: {
      "@conf": resolve("../src/components"),
      "@components": resolve("../src/components"),
      "@api": resolve("../src/api"),
      "@helpers": resolve("../src/helpers"),
      "@store": resolve("../src/store"),
      "@dy.design": resolve("../src/dy.design")
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "happypack/loader?id=js"
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 8192,
          name: "public/img/[name].[ext]"
        }
      },
      {
        test: /\.(ttf|woff|eot)$/,
        loader: "url-loader",
        query: {
          limit: 8192,
          name: "public/font/[name].[ext]"
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("../src/index.html"),
      filename: "index.html",
      favicon: resolve("../public/logo.ico")
    }),

    new copyWebpackPlugin([
      {
        from: resolve("../public"),
        to: resolve("../dist/public")
      },
      {
        from: resolve("../static"),
        to: resolve("../dist/static")
      }
    ]),

    new HappyPack({
      id: "js",
      loaders: ["babel-loader"],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true
    }),

    new speedMeasurePlguin(),
    new ManifestPlugin(),
    new progressBarWebpackPlugin({
      format: chalk.keyword("orange")(
        "compiling [:bar] :current/:total :percent :elapseds :msg"
      ),
      complete: "#",
      incomplete: "-",
      width: 20
    })
  ],

  performance: {
    hints: false
  }
};
