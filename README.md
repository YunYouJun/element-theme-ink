# Element-Theme-Ink

[Element](http://element.eleme.io/)

> element component ink theme.

Base on [element-theme-chalk](https://github.com/ElementUI/theme-chalk)

Preview: [element-theme-ink-preview](https://github.yunyoujun.cn/element-theme-ink-preview)

## Installation

### [Install Element](http://element-cn.eleme.io/#/zh-CN/component/installation)

```sh
npm install element-ui -S
```

### Install Theme

```shell
npm i element-theme-ink -S
```

## Usage

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
