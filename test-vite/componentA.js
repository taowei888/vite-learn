// 基础css 类名无任何处理
// import "./componentA.css"

// css module 类名被替换，默认导出一个对象映射
import componentA from "./componentA.module.css"
// componentA
// {
//     "footer": "componentA-module__footer__dF-z1",
//     "footer-content": "componentA-module__footer-content__YqcAB",
//     "footerContent": "componentA-module__footer-content__YqcAB"
// }

// import componentLess from "./index.module.less"
// console.log('componentLess', componentLess)


import A from "./index.module.less"



const div = document.createElement("div")

document.body.appendChild(div)

// 这里本意想应用componentA.css的footer，如果有同名且在这个文件后面加载，样式就会被覆盖
// div.className = "footer"


// div.className = componentA.footer

div.className = A['b']
