import nav from "../../nav.config.json";
import type { DefaultTheme } from "../theme/config";

export function getComponentsSidebar() {
  let componentsSidebar: DefaultTheme.SideBarItem[] = [];
  nav.groups.forEach((group) => {
    const children: DefaultTheme.SideBarItem[] = [];
    group.list.forEach((child) => {
      children.push({
        text: child.title,
        link: `/components/${child.path}`,
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
  return [
    {
      text: "指南",
      link: "/guide/index",
    },
    {
      text: "设计",
      link: "/guide/design",
    },
  ];
}

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/components": getComponentsSidebar(),
  "/guide": getGuideSidebar(),
};
