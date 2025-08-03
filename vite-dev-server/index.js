const Koa = require("koa");
const fs = require("fs");
const path = require("path");

const app = new Koa();
app.use(async (ctx) => {
    console.log('ctx.request.url', ctx.request.url)
    if (ctx.request.url === "/") {
        const indexContent = await fs.promises.readFile(path.resolve(__dirname, "./index.html"));
        ctx.response.body = indexContent;
        ctx.response.set("Content-Type", "text/html");
    }
    if (ctx.request.url === '/main.js') {
        const JSContent = await fs.promises.readFile(path.resolve(__dirname, './main.js'));
        ctx.response.body = JSContent;
        ctx.response.set("Content-Type", "text/javascript");
    }
    if (ctx.request.url === '/APP.vue') {
        const JSContent = await fs.promises.readFile(path.resolve(__dirname, './APP.vue'));
        ctx.response.body = JSContent;
        ctx.response.set("Content-Type", "text/javascript");
    }
})

app.listen(5173, () => {
    console.log("vite dev serve listen on 5173");
})