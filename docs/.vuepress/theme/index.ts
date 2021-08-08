import { path } from "@vuepress/utils";
import { ThemeObject } from "@vuepress/core";

const localTheme: ThemeObject = {
  // theme: path.resolve(__dirname, "../../../docs/.vuepress/theme"),
  // theme: "local",
  name: "vuepress-theme-local",
  extends: "@vuepress/theme-default",
  layouts: {
    Layout: path.resolve(__dirname, "layouts/Layout.vue"),
    // clientAppEnhanceFiles: path.resolve(__dirname, "../clientAppEnhance.ts"),
  },
};

export default localTheme;
