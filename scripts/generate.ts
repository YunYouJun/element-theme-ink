import fs from "fs";

function getAllELementComponents() {
  const elementThemeFolder =
    "node_modules/element-plus/packages/theme-chalk/src";
  const suffix = ".scss";
  return fs
    .readdirSync(elementThemeFolder)
    .filter((item) => item.endsWith(suffix))
    .map((item) => item.slice(0, -suffix.length));
}

function generate() {
  console.log("generate");

  const components = getAllELementComponents();
  console.log(components);
}

generate();
