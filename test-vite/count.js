// Uncaught TypeError: Failed to resolve module specifier "loadsh".Relative references must start with either "/", "./", or "../".
// 没有构建工具时，不能直接 "loadsh" 这种形式引入
// import _ from 'loadsh';

// 此时需要引入构建工具
// npm install vite -D
// 在package.json中添加 "dev": "vite"
// 在终端运行 npm run dev
// 在浏览器中打开 http://127.0.0.1:5173/
// 开箱即用，不需要配置
import _ from 'loadsh';
console.log(_);


export const count = 100;