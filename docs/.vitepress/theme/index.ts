import "vitepress/dist/client/theme-default/styles/vars.css";
import "vitepress/dist/client/theme-default/styles/layout.css";
import "vitepress/dist/client/theme-default/styles/code.css";
import "vitepress/dist/client/theme-default/styles/custom-blocks.css";
import "vitepress/dist/client/theme-default/styles/sidebar-links.css";

import "./styles/vars.scss";
import "./styles/index.scss";

import "./styles/element.scss";

import ElementPlus from "element-plus";

import { Theme } from "vitepress";
// import Layout from "vitepress/dist/client/theme-default/Layout.vue";
import Layout from "./layouts/Layout.vue";
import NotFound from "vitepress/dist/client/theme-default/NotFound.vue";

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus);
  },
};

export default theme;
