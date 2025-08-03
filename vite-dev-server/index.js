const Koa = require("koa");
const fs = require("fs");
const path = require("path");

const viteConfig = require("./vite.config");
const aliasResolver = require("./aliasResolver");


const app = new Koa();
app.use(async (ctx) => {
    if (ctx.request.url === "/") {
        const indexContent = await fs.promises.readFile(path.resolve(__dirname, "./index.html"));
        ctx.response.body = indexContent;
        ctx.response.set("Content-Type", "text/html");
    }
    if (ctx.request.url.endsWith(".js")) {
        const JSContent = await fs.promises.readFile(path.resolve(__dirname, "." + ctx.request.url));
        // 直接进行alias的替换
        const lastResult = aliasResolver(viteConfig.resolve.alias, JSContent.toString());
        ctx.response.body = lastResult;
        ctx.response.set("Content-Type", "text/javascript");
    }
})

app.listen(5173, () => {
    console.log("vite dev serve listen on 5173");
})