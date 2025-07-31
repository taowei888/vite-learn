export default {
    optimizeDeps: {
        // 排除lodash-es，不进行预构建，则里面所有模块都作为网络请求去加载，极其恐怖
        // 所以vite依赖预构建非常重要
        exclude: ['lodash-es'], 
    },
};