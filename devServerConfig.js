const fs = require("fs");
const path = require("path");
const ipFilePath = path.resolve(__dirname, "devServerIP.js");
let ip = "";
if (fs.existsSync(ipFilePath) && fs.statSync(ipFilePath).isFile()) {
  ip = require(ipFilePath);
} else {
  fs.writeFileSync(
    ipFilePath,
    `module.exports = 'http://localhost:3000'`,
    "utf8"
  );
}
console.log(ip);

module.exports = {
  devServer: {
    contentBase: "./app",
    host: "http://localhost",
    target: ip,
    port: 9999,
    apilog: true //控制台打印实际转发接口 false 关掉
  }
};
