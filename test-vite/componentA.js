// import "./componentA.css"
import componentA from "./componentA.module.css"
console.log('componentA', componentA)

import componentLess from "./index.module.less"
console.log('componentLess', componentLess)


const div = document.createElement("div")

document.body.appendChild(div)
// div.className = "footer"
div.className = componentA.footer