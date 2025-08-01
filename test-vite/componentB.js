// import "./componentB.css"


import componentB from "./componentB.module.css"
// componentB: { footer: "componentB-module__footer__Mf11-" }

// console.log('componentB', componentB)
const div = document.createElement("div")

document.body.appendChild(div)
// div.className = "footer"
div.className = componentB.footer