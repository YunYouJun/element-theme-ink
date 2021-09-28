import type { DefaultTheme } from "../theme/config";
import { sidebar } from "./sidebar";
import { nav } from "./nav";

const themeConfig: DefaultTheme.Config = {
  // algolia: {
  //   appId: "",
  //   apiKey: "",
  //   indexName: "",
  // },
  repo: "YunYouJun/element-theme-ink",
  logo: "/assets/logo.svg",
  docsDir: ".",
  docsBranch: "main",
  docsRepo: "windicss/docs",
  editLinks: true,
  editLinkText: "✍️ Suggest changes to this page",
  nav,
  sidebar,
};

export default themeConfig;
