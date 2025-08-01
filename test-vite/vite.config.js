// export default {
//     optimizeDeps: {
//         // 排除lodash-es，不进行预构建，则里面所有模块都作为网络请求去加载，极其恐怖
//         // 所以vite依赖预构建非常重要
//         exclude: ['lodash-es'], 
//     },
// };

// 利用 defineConfig 得到配置文件的语法提示，ts yyds
// import { defineConfig } from "vite";
// export default defineConfig({
//     optimizeDeps: {
//         exclude: [],
//     },
//     root
// })

// 或者类型导入得到配置文件的语法提示
/* @type {import('vite').UserConfig} */
// const viteconfig = {
//     optimizeDeps: {
//         exclude: [],
//     }
// }

// ⚠️ 重要细节：使用 import 语句导入 ES Module 时
// Node.js 要求项目必须在 package.json 中声明 "type": "module"
// 否则会报错：require() of ES Module not supported
// 解决方案：
// 1. 在 package.json 添加 "type": "module"
// 2. 或者用简单的 export default {} 语法（不使用 import）
import { defineConfig, loadEnv } from "vite";

import viteBaseConfig from './vite.base.config.js'
import viteDevConfig from './vite.dev.config.js'
import viteProdConfig from './vite.prod.config.js'

// 防止写过多 if else
// 使用策略模式
const envResolver = {
    "build": () => {
        // console.log('生产环境=====')
        return Object.assign({}, viteBaseConfig, viteProdConfig)
    },
    "serve": () => {
        // console.log('开发环境=====')
        return { ...viteBaseConfig, ...viteDevConfig }
    }
}

export default defineConfig(({ command, mode }) => {
    // command的值取决于
    // npm run dev/serve  为serve
    // npm run build 为build
    // console.log('command=====', command)


    //   注意！ 你应该使用：
    //   npm run dev-- --mode dev
    //   注意中间的--，这是 npm 传递参数给底层命令的正确语法。
    //   如果你使用的是 npm run dev --mode dev（没有--），那么--mode dev 会被当作 npm 的参数而不是 vite 的参数。
    //   mode 的值取决于 npm 脚本后的参数 如 npm run dev -- --mode dev
    // console.log('mode=====', mode)


    // 这里读process.env其实没有意义，因为底下会获取配置文件，配置文件里可能配置envDir，修改了环境变量位置
    // console.log('process.env=====', process.env)

    // console.log('process.cwd()=====', process.cwd())

    // 第二个参数 .env 是文件位置
    // 第三个参数是环境变量文件名，比如可以传 .envA
    // 不传默认 .env 
    const env = loadEnv(mode, process.cwd(), '')
    // console.log('env=====', env)

    return envResolver[command]()
})

