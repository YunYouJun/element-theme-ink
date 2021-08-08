import { path } from '@vuepress/utils'

const localTheme = {
  // theme: path.resolve(__dirname, "../../../docs/.vuepress/theme"),
  // theme: "local",
  name: "vuepress-theme-local",
  extend: "@vuepress/theme-default",
  layouts: {
    Layout: path.resolve(__dirname, "layouts/Layout.vue"),
    // Layout: path.resolve(__dirname, "layouts/NewLayout.vue"),
    // clientAppEnhanceFiles: path.resolve(__dirname, "../clientAppEnhance.ts"),
  },
};

export default localTheme;
