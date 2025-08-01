// import "./componentB.css"
import componentB from "./componentB.module.css"
console.log('componentB', componentB)
const div = document.createElement("div")

document.body.appendChild(div)
// div.className = "footer"
div.className = componentB.footer