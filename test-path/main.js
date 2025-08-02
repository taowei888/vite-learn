
// node端读取或者操作文件，如果用的是相对路径，会使用process.cwd()去拼接
// process.cwd()获取node当前执行目录
// 如
// 在此项目根目录下 node test-path/main.js 拿到项目根目录绝对路径
// 在此项目test-path目录下 node main.js 拿到项目test-path文件夹绝对路径
console.log(process.cwd())


// commonjs规范
// 注入变量 __dirname 始终返回当前文件所在的目录
console.log(__dirname)


const path = require('path')
const fs = require('fs')


// 希望基于main.js进行绝对路径的生成
// const result = fs.readFileSync(__dirname + '/variables.css')
// 理论上上面写法已经能满足要求，但是会有兼容性问题，比如Mac系统和windows系统斜杠不同，所以需要path模块处理
const result = fs.readFileSync(path.resolve(__dirname, './variables.css'))

console.log('result', result.toString())

