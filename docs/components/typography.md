---
title: 字体
---

<style lang="scss">
  .demo-typo-box {
    height: 200px;
    width: 200px;
    position: relative;
    border: 1px solid #eaeefb;
    font-size: 40px;
    color: #1f2d3d;
    text-align: center;
    line-height: 162px;
    padding-bottom: 36px;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 17px;
    border-radius: 4px;

    .name {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-top: 1px solid #eaeefb;
      font-size: 14px;
      color: #8492a6;
      line-height: 35px;
      text-align: left;
      text-indent: 10px;
    }
  }
  .typo-PingFang {
    font-family: 'PingFang SC';
  }
  .typo-Microsoft {
    font-family: 'Microsoft YaHei';
  }
  /* 英文 */
  .typo-Arial {
    font-family: 'Arial';
  }
  .typo-Lato {
    font-family: 'Lato';
  }
  .typo-weight-bold {
    font-weight: 600;
  }
  .typo-weight-normal {
    font-weight: 400;
  }
  .typo-weight-light {
    font-weight: 300;
  }
</style>

考虑兼容性

以 `PingFang SC` `Microsoft YaHei` 字体为主， `Lato` 为辅

### 中文字体

<div class="demo-typo-box typo-PingFang">
  苹果苹方
  <div class="name">PingFang SC</div>
</div>
<div class="demo-typo-box typo-Microsoft">
  微软雅黑
  <div class="name">Microsoft YaHei</div>
</div>

### 英文／数字字体

<div class="demo-typo-box typo-Arial">
  RGag
  <div class="name">Arial</div>
</div>
<div class="demo-typo-box typo-Lato">
  RGag
  <div class="name">Lato</div>
</div>

### Font-family 代码

```css
font-family: Lato, "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
```

## font-weight 字重

默认使用细体， `font-weight` 为 `300`。

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Font-Weight</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="typo-weight-light">light</td>
      <td class="typo-weight-light">300</td>
      <td class="typo-weight-light">用 Element-Theme-Ink 快速搭建页面</td>
    </tr>
    <tr>
      <td class="typo-weight-normal">normal</td>
      <td class="typo-weight-normal">400</td>
      <td class="typo-weight-normal">用 Element-Theme-Ink 快速搭建页面</td>
    </tr>
    <tr>
      <td class="typo-weight-bold">bold</td>
      <td class="typo-weight-bold">600</td>
      <td class="typo-weight-bold">用 Element-Theme-Ink 快速搭建页面</td>
    </tr>
  </tbody>
</table>
