# 开发思路

生成缓存 `.ink-cache/` 文件夹。

从 `node_modules/element-plus/packages/theme-chalk/src` 拷贝主题内容，将 `element-theme-ink/src` 修改的 `scss` 文件在 `.ink-cache/` 下创建软链，修改覆盖旧主题。

最后以 `.ink-cache/` 下的 `index.scss` 作为主入口，使用 `gulp` 进行编译。
