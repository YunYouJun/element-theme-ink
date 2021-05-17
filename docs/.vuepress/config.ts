import { defineUserConfig } from "vuepress";
// import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions } from "vuepress";
// import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress-vite";
import * as pkg from "../../package.json";
import nav from "../nav.config.json";

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
      { text: "组件", link: "/components/color.md" },
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
        text: child.title,
        link: `/components/${child.path}.md`,
      });
    });
    componentsSidebar.push({
      text: group.groupName,
      children,
    });
  });
  return componentsSidebar;
}

function getGuideSidebar() {
  return ["README.md", "design.md"];
}
