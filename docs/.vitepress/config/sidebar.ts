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

function getGuideSidebar(): DefaultTheme.SideBarItem[] {
  return [
    {
      text: "📖 指南",
      link: "/guide/",
    },
    {
      text: "🎨 设计",
      link: "/guide/design",
    },
    {
      text: "🙌 关于",
      link: "/guide/about",
    },
  ];
}

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/guide": getGuideSidebar(),
  "/components": getComponentsSidebar(),
};
