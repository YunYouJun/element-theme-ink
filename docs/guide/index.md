# 指南

<p align="center">
  <a href="https://ink.elpsy.cn" target="_blank" rel="noopener noreferrer"><img width="100" src="/assets/logo.svg" alt="Element Theme Ink Logo"></a>
  <h1 align="center">Element-Theme-Ink</h1>
</p>

<p align="center">
  <a href="https://npmcharts.com/compare/element-theme-ink?minimal=true"><img src="https://img.shields.io/npm/dt/element-theme-ink.svg?style=for-the-badge" alt="Downloads"></a>&nbsp;
  <a href="https://www.npmjs.com/package/element-theme-ink"><img src="https://img.shields.io/npm/v/element-theme-ink.svg?style=for-the-badge" alt="Version"></a>&nbsp;
  <a href="https://www.npmjs.com/package/element-theme-ink"><img src="https://img.shields.io/npm/l/element-theme-ink.svg?style=for-the-badge" alt="License"></a>&nbsp;
  <a href="https://cdn.jsdelivr.net/npm/element-theme-ink">
    <img src="https://img.shields.io/bundlephobia/minzip/element-theme-ink?style=for-the-badge" alt="npm bundle size">
  </a>
</p>

> A dead simple element theme.

- Preview: [element-theme-ink-preview](https://ink.yunyoujun.cn/)
- GitHub: [element-theme-ink](https://github.com/YunYouJun/element-theme-ink)
- npm: [element-theme-ink](https://www.npmjs.com/package/element-theme-ink)
- unpkg: [element-theme-ink](https://unpkg.com/element-theme-ink)
- jsdelivr: <https://cdn.jsdelivr.net/npm/element-theme-ink>

Base on [element](https://github.com/ElemeFE/element) & [element-theme-chalk](https://github.com/ElementUI/theme-chalk)

## Installation

### Install Element

可参见 Element 官方文档 [安装](http://element-cn.eleme.io/#/zh-CN/component/installation)

```bash
npm install element-ui -S
```

### Install Theme

```shell
npm i element-theme-ink -S
# or
yarn add element-theme-ink
```

## Usage

ElementUI 使用方法参见[官网](http://element.eleme.io/)，各組件使用方法与 [Element 2.3](http://element.eleme.io/2.3/#/zh-CN/component/installation) 版本一致，本项目仅对主题样式进行定制。

提供多种方式导入

### Stylesheet

You can use unpkg directly.

```html
<link rel="stylesheet" href="https://unpkg.com/element-theme-ink" />
```

Or use css in node_modules.

```html
<link
  rel="stylesheet"
  href="path/to/node_modules/element-theme-ink/dist/index.css"
/>
```

### Import in Sass

```scss
@import "element-theme-ink";
```

### Import in Javascript

#### Fully import

```javascript
// main.js
import "element-theme-ink";
```

#### Import on demand

```javascript
import "element-theme-ink/dist/input.css";
import "element-theme-ink/dist/select.css";
// ...
```

#### Import Scss

```js
import "element-theme-ink/src/index.scss";
```

## Example

### element-ui for Vue2

```bash
yarn add element
```

```js
// main.js
import Vue from "vue";
import ElementUI from "element-ui";
// 当您想要切换回 element 默认主题时，只需取消默认主题的注释，并注释 ink 主题的引入即可
// import 'element-ui/dist/theme-chalk/index.css'
import "element-theme-ink";
import App from "./App.vue";

Vue.use(ElementUI);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

### element-plus for Vue3

```bash
yarn add element-plus
```

<CodeGroup>
  <CodeGroupItem title="TypeScript" active>

```ts
import { createApp } from "vue";
import App from "./App.vue";
import "element-theme-ink";
```

  </CodeGroupItem>

  <CodeGroupItem title="JavaScript">

```js
import "element-theme-ink";
```

  </CodeGroupItem>
</CodeGroup>
