// Uncaught TypeError: Failed to resolve module specifier "loadsh".Relative references must start with either "/", "./", or "../".
// 没有构建工具时，不能直接 "loadsh" 这种形式引入
// import _ from 'lodash';

// 此时需要引入构建工具
// npm install vite -D
// 在package.json中添加 "dev": "vite"
// 在终端运行 npm run dev
// 在浏览器中打开 http://127.0.0.1:5173/
// 开箱即用，不需要配置
import _ from 'lodash';
console.log(_);

// 方式2: 导入整个默认导出
import lodashEs from "lodash-es";
console.log('lodashEs', lodashEs); //发现vite还是把lodash-es打包了，在config里定义不要被打包


export const count = 100;