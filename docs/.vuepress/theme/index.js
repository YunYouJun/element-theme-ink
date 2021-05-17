const { path } = require("@vuepress/utils");

module.exports = {
  name: "vuepress-theme-local",
  extend: "@vuepress/theme-default",
  layouts: {
    Layout: path.resolve(__dirname, "layouts/GlobalLayout.vue"),
    // clientAppEnhanceFiles: path.resolve(__dirname, '../app/clientAppEnhance.ts'),
  },
};
