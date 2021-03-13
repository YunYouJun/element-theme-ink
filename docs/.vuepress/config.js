const nav = require("../nav.config.json");

module.exports = {
  title: "Ink",
  themeConfig: {
    repo: "YunYouJun/element-theme-ink",
    editLinks: true,

    logo: "/logo.png",
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/components/color/" },
    ],

    smoothScroll: true,

    sidebar: {
      "/components/": getComponentsSidebar(),
      "/guide/": getGuideSidebar(),
    },
  },
};

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
