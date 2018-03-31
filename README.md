<p align="center">
  <a href="https://ink.yunyoujun.cn" target="_blank" rel="noopener noreferrer"><img width="100" src="https://raw.githubusercontent.com/YunYouJun/element-theme-ink-preview/master/src/assets/images/element-logo-small.png" alt="Element Theme Ink Logo"></a>
  <h1 align="center">Element-Theme Ink</h1>
</p>

<p align="center">
  <a href="https://npmcharts.com/compare/element-theme-ink?minimal=true"><img src="https://img.shields.io/npm/dt/element-theme-ink.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/element-theme-ink"><img src="https://img.shields.io/npm/v/element-theme-ink.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/element-theme-ink"><img src="https://img.shields.io/npm/l/element-theme-ink.svg" alt="License"></a>
  <a href="http://img.badgesize.io/https://unpkg.com/element-theme-ink/lib/index.css?compression=gzip&label=gzip%20size:%20CSS">
    <img src="http://img.badgesize.io/https://unpkg.com/element-theme-ink/lib/index.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
</p>

# Ink

> A dead simple element theme.

GitHub: [element-theme-ink](https://github.com/YunYouJun/element-theme-ink)

NPM: [element-theme-ink](https://www.npmjs.com/package/element-theme-ink)

Preview: [element-theme-ink-preview](https://ink.yunyoujun.cn/)

Base on [element](https://github.com/ElemeFE/element) & [element-theme-chalk](https://github.com/ElementUI/theme-chalk)

## Installation

### Install Element

可参见 Element 官方文档 [安装](http://element-cn.eleme.io/#/zh-CN/component/installation)

```sh
npm install element-ui -S
```

### Install Theme

```shell
npm i element-theme-ink -S
```

## Usage

ElementUI 使用方法参见[官网](http://element.eleme.io/)，各組件使用方法与 [Element 2.2](http://element.eleme.io/2.2/#/zh-CN/component/icon) 版本一致，本项目仅对主题样式进行定制。

### Stylesheet

```html
<link rel="stylesheet" href="path/to/node_modules/element-theme-ink/lib/index.css">
```

### Import in Sass 

```scss
@import 'element-theme-ink'
```

### Import in Javascript  (use webpack)

#### Fully import

```javascript
import 'element-theme-ink'
```

#### Import on demand

```javascript
import 'element-theme-ink/lib/input.css'
import 'element-theme-ink/lib/select.css'
// ...
```

#### Import Scss

```js
import 'element-theme-ink/src/index.scss'
```


## Example

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-theme-ink'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
