const { path } = require("@vuepress/utils");
console.log(path.resolve(__dirname, "layouts/Layout.vue"));
module.exports = {
  theme: path.resolve(__dirname, "../../../docs/.vuepress/theme"),
  // theme: "local",
  name: "vuepress-theme-local",
  extend: "@vuepress/theme-default",
  layouts: {
    Layout: path.resolve(__dirname, "layouts/Layout.vue"),
    // clientAppEnhanceFiles: path.resolve(__dirname, "../clientAppEnhance.ts"),
  },
};
