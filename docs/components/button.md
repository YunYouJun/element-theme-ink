---
title: 按钮
---

<style lang="scss" scoped>
  .el-button {
    margin: 5px;
  }
  .demo-block {
    margin: 5px;
  }
</style>

常用的操作按钮。优先推荐使用与本主题风格统一的 `plain` 样式。

### 基础样式

使用`type`、`plain`和`round`属性来定义 Button 的样式。

增加 `type='dark'` 类型

```html
<el-button type="light" plain>浅色按钮</el-button>
<el-button type="dark" plain>深色按钮</el-button>
```

<demo-block>
<el-row style="background-color: #333;">
  <el-button type="light">浅色按鈕</el-button>
  <el-button type="light" plain>浅色按鈕</el-button>
</el-row>
<hr>
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="dark">深色按鈕</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
<hr>
<el-row>
  <el-button plain>朴素按钮</el-button>
  <el-button type="dark" plain>深色按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</el-row>
<hr>
<el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="dark" round>深色按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</el-row>
<hr>
<el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>
</demo-block>

### Glow 效果

未修改 Element 组件， 因此通过引用 `is-glow` 样式实现。

```html
<el-button class="is-glow">Glow 按钮</el-button>
```

<demo-block>
  <el-button class="is-glow" glow>朴素按钮</el-button>
  <el-button class="is-glow" type="dark" glow>深色按钮</el-button>
  <el-button class="is-glow" type="primary" glow>主要按钮</el-button>
  <el-button class="is-glow" type="success" glow>成功按钮</el-button>
  <el-button class="is-glow" type="info" glow>信息按钮</el-button>
  <el-button class="is-glow" type="warning" glow>警告按钮</el-button>
  <el-button class="is-glow" type="danger" glow>危险按钮</el-button>
</demo-block>

<demo-block>
  <el-button class="is-glow" plain glow>朴素按钮</el-button>
  <el-button class="is-glow" type="dark" plain glow>深色按钮</el-button>
  <el-button class="is-glow" type="primary" plain glow>主要按钮</el-button>
  <el-button class="is-glow" type="success" plain glow>成功按钮</el-button>
  <el-button class="is-glow" type="info" plain glow>信息按钮</el-button>
  <el-button class="is-glow" type="warning" plain glow>警告按钮</el-button>
  <el-button class="is-glow" type="danger" plain glow>危险按钮</el-button>
</demo-block>

### 禁用状态

按钮不可用状态。

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

<demo-block>
  <el-button disabled>默认按钮</el-button>
  <el-button type="dark" disabled>深色按钮</el-button>
  <el-button type="primary" disabled>主要按钮</el-button>
  <el-button type="success" disabled>成功按钮</el-button>
  <el-button type="info" disabled>信息按钮</el-button>
  <el-button type="warning" disabled>警告按钮</el-button>
  <el-button type="danger" disabled>危险按钮</el-button>
</demo-block>

<demo-block>
  <el-button plain disabled>朴素按钮</el-button>
  <el-button type="dark" plain disabled>深色按钮</el-button>
  <el-button type="primary" plain disabled>主要按钮</el-button>
  <el-button type="success" plain disabled>成功按钮</el-button>
  <el-button type="info" plain disabled>信息按钮</el-button>
  <el-button type="warning" plain disabled>警告按钮</el-button>
  <el-button type="danger" plain disabled>危险按钮</el-button>
</demo-block>

### 文字按钮

没有边框和背景色的按钮。

<demo-block>
<el-button type="text">文字按钮</el-button>
<el-button type="text" disabled>文字按钮</el-button>
</demo-block>

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

使用`<el-button-group>`标签来嵌套你的按钮。

<demo-block>
<el-button-group>
  <el-button type="dark" icon="el-icon-arrow-left">上一页</el-button>
  <el-button type="dark">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="dark" icon="el-icon-edit"></el-button>
  <el-button type="dark" icon="el-icon-share"></el-button>
  <el-button type="dark" icon="el-icon-delete"></el-button>
</el-button-group>
</demo-block>

### 加载中

<demo-block>
<el-button plain :loading="true">加载中</el-button>
</demo-block>
### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

<demo-block>
<div>
  <el-button>默认按钮</el-button>
  <el-button size="medium">中等按钮</el-button>
  <el-button size="small">小型按钮</el-button>
  <el-button size="mini">超小按钮</el-button>
</div>
<div style="margin-top: 20px">
  <el-button round>默认按钮</el-button>
  <el-button size="medium" round>中等按钮</el-button>
  <el-button size="small" round>小型按钮</el-button>
  <el-button size="mini" round>超小按钮</el-button>
</div>
</demo-block>
