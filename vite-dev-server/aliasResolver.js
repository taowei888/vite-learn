module.exports = function (aliasConf, JSContent) {
    const entires = Object.entries(aliasConf);
    let lastContent = JSContent;
    entires.forEach(entry => {
        const [alias, path] = entry;
        const srcIndex = path.indexOf("/src");
        // alias别名最终做的事情就是一个字符串替换
        const realPath = path.slice(srcIndex, path.length);
        lastContent = JSContent.replace(alias, realPath);

    })
    return lastContent;
}