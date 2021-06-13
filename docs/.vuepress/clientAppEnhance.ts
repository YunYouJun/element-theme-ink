import { defineClientAppEnhance } from "@vuepress/client";
import ElementPlus from "element-plus";
import "../../src/index.scss";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(ElementPlus as any);
});
