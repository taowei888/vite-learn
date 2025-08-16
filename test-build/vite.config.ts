import { defineConfig } from 'vite'
import path from "path";

export default defineConfig({
    plugins: [],
    build: {
        minify: false, // 禁用代码压缩，便于查看打包后的代码
        rollupOptions: {
            input: {
                mian: path.resolve(__dirname, './index.html'),
                product: path.resolve(__dirname, './product.html')
            },
            output: {
                manualChunks: (id: string) => {
                    console.log(id)
                    // ts认为当前环境不在es6之后 去tsconfig里面去配置
                    if (id.includes('node_modules')) {
                        return "vendor"
                    }
                }
            }
        }
    },
    server: {
        port: 3000,
        open: true,
    },
})