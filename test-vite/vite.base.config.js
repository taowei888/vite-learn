import { defineConfig } from "vite";

export default defineConfig({
    // 环境变量前缀配置
    // 作用：只有以 'ENV' 开头的环境变量才会被暴露给客户端代码
    // 默认值：'VITE_'，这里自定义为 'ENV'
    envPrefix: 'ENV',

    // CSS 相关配置
    css: {
        // CSS Modules 配置
        modules: {
            // 类名转换约定
            // 作用：定义 CSS Modules 中类名的命名转换规则
            // 可选值：
            //   - 'camelCase': 将 kebab-case 转换为 camelCase（如：footer-content → footerContent）
            //   - 'dashes': 保留连字符，但允许驼峰命名访问
            //   - 'only': 只保留原始类名
            //   - 'camelCaseOnly': 只允许驼峰命名访问，不保留原始类名
            localsConvention: 'camelCase',

            // 作用域行为配置
            // 作用：定义 CSS 模块的作用域行为
            // 可选值：
            //   - 'local': 默认值，所有类名都会被模块化处理
            //   - 'global': 所有类名都保持全局，不进行模块化处理
            //   - 'pure': 只有被 :local() 包装的类名才会被模块化
            scopeBehaviour: 'local',

            // 自定义生成的作用域类名格式
            // 作用：定义 CSS Modules 生成的唯一类名的命名规则
            // 默认格式：通常是随机哈希值，如 "_footer_i22st_1"
            // 自定义格式说明：
            //   - [name]: CSS 文件名（不含扩展名），如 "componentA"
            //   - [local]: 原始类名，如 "footer"
            //   - [hash:base64:5]: 5位 base64 编码的哈希值，如 "a1b2c"
            // 最终生成效果：componentA__footer__a1b2c
            // 优势：更易调试，可以清楚看出类名来源和原始名称
            generateScopedName: '[name]__[local]__[hash:base64:5]',

            // 配置成函数，返回值就是最终类名
            // 参数说明：
            //   - name: 原始类名
            //   - filename: CSS 文件名（不含扩展名）
            //   - css: CSS 内容
            // 返回值：
            //   - 最终类名
            // 配置成函数，返回值就是最终类名
            // generateScopedName: (name, filename, css) => {
            //     console.log('name', name)
            //     console.log('filename', filename)
            //     console.log('css', css)
            //     return `123__${Math.random().toString(36).slice(2, 15)}`
            // }

            // 哈希前缀配置
            // 作用：为生成的哈希值添加自定义前缀，影响最终类名的哈希部分
            // 默认值：无前缀，直接使用文件内容生成哈希
            // 使用场景：
            //   - 确保不同项目间的类名哈希不冲突
            //   - 便于识别和调试特定项目的样式
            // 示例：设置 "hello" 后，哈希值会基于 "hello" + 文件内容生成
            // 最终效果：componentA__footer__xyz12（其中 xyz12 基于 "hello" + CSS内容生成）
            hashPrefix: "hello",

            // 全局模块路径配置
            // 作用：指定哪些 CSS 模块文件应该被视为全局样式，不进行类名哈希化处理
            // 默认值：[]（空数组），所有 .module.css 文件都会进行模块化处理
            // 使用场景：
            //   - 某些组件样式需要保持原始类名，便于第三方库或全局样式覆盖
            //   - 过渡期间，部分文件暂时不使用 CSS Modules 功能
            // 配置效果：'./componentB.module.css' 中的类名将保持原样，不会被哈希化
            // 注意：即使在此配置，文件仍需要通过 CSS Modules 方式导入才能正常工作
            globalModulePaths: ['./componentB.module.css'],
        }
    }
})

