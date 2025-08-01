// 语法降级、编译。。。 预设帮助我们一次性安装好
const postcssPresetEnv = require("postcss-preset-env")
module.exports = {
    plugins: [postcssPresetEnv()]
}