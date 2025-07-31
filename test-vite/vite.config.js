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
import { defineConfig } from "vite";

import viteBaseConfig from './vite.base.config.js'
import viteDevConfig from './vite.dev.config.js'
import viteProdConfig from './vite.prod.config.js'

// 防止写过多 if else
// 使用策略模式

const envResolver = {
    "build": () => {
        console.log('生产环境=====')
        return Object.assign({}, viteBaseConfig, viteProdConfig)
    },
    "serve": () => {
        console.log('开发环境=====')
        return { ...viteBaseConfig, ...viteDevConfig }
    }
}

export default defineConfig(({ command }) => {
    // command的值取决于
    // npm run dev/serve  为serve
    // npm run build 为build
    console.log('command=====', command)
    return envResolver[command]()
})

