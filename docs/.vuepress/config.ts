import { defineUserConfig } from "vuepress";
// import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
// import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress-vite";
import * as pkg from "../../package.json";
import nav from "../nav.config.json";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig<DefaultThemeOptions>({
  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite in dev, use webpack in prod
    (isProd ? "@vuepress/webpack" : "@vuepress/vite"),

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
