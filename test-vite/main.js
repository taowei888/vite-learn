// GET http://127.0.0.1:5500/test-vite/count net::ERR_ABORTED 404 (Not Found)
// 没有任何构建工具时，必须补全文件后缀，否则报错
// import { count } from './count.js'; 
// console.log(count);


// import * as request from "./request.js"

// import "./index.css"

// import "./componentA.js"
// import "./componentB.js"

// import les from "./index.module.less"
// console.log('les',les)

// import './src/imageLoader'

// import jsonFile from './src/assets/json/index.json'

import './src/svgLoader'



// 导出一个对象
// 如果没有使用vite 其他构件工具中则会导出一个字符串
// console.log('jsonFile', jsonFile) 

// 具名导出 利于树摇
// import { name } from './src/assets/json/index.json'
// console.log('name', name) 
