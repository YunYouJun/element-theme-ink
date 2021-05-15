import { defineUserConfig } from "vuepress";
// import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions } from "vuepress";
// import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress-vite";
import * as pkg from "../../package.json";
const nav = require("../nav.config.json");

export default defineUserConfig<DefaultThemeOptions>({
  // bundler: "@vuepress/vite",
  title: pkg.name,
  description: pkg.description,
  themeConfig: {
    repo: "YunYouJun/element-theme-ink",
    editLinks: true,

    logo: "/logo.png",
    navbar: [
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/components/color/" },
    ],

    smoothScroll: true,

    sidebar: {
      "/components/": getComponentsSidebar(),
      "/guide/": getGuideSidebar(),
    },
  },
});

function getComponentsSidebar() {
  let componentsSidebar = [];
  nav.groups.forEach((group) => {
    const children = [];
    group.list.forEach((child) => {
      children.push({
        title: child.title,
        path: `/components/${child.path}`,
      });
    });
    componentsSidebar.push({
      title: group.groupName,
      collapsable: false,
      sidebarDepth: 0,
      children,
    });
  });
  return componentsSidebar;
}

function getGuideSidebar() {
  return ["", "design"];
}
