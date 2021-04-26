<style lang="scss" scoped>
@import "../../src/common/var";
  .demo-color-box {
    border-radius: 4px;
    padding: 20px;
    height: 74px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    margin: 5px;
  }
  .demo-color-box-group {
    .demo-color-box {
      border-radius: 0;
      margin: 0 5px;
    }
    .demo-color-box:first-child {
      border-radius: 4px 4px 0 0;
    }
    .demo-color-box:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
  .bg-blue {
    background-color: $--color-primary;
  }
  .bg-success {
    background-color: $--color-success;
  }
  .bg-warning {
    background-color: $--color-warning;
  }
  .bg-danger {
    background-color: $--color-danger;
  }
  .bg-info {
    background-color: $--color-info;
  }
  .bg-purple {
    background-color: $--color-purple;
  }
  .bg-gray {
    color: black;
    background-color: $--color-gray;
  }

  .bg-text-primary {
    background-color: #303133;
  }
  .bg-text-regular {
    background-color: #606266;
  }
  .bg-text-secondary {
    background-color: #909399;
  }
  .bg-text-placeholder {
    background-color: #c0c4cc;
  }

  .bg-border-base {
    background-color: #dcdfe6;
  }
  .bg-border-light {
    background-color: #e4e7ed;
  }
  .bg-border-lighter {
    background-color: #ebeef5;
  }
  .bg-border-extra-light {
    background-color: #f2f6fc;
  }

  .bg-dark {
    background-color: #303133;
  }
  .bg-light {
    background-color: #fafbfc;
    color: #303133;
    border: 1px solid #303133;
  }
  .bg-black {
    background-color: #000;
  }
  .bg-white {
    background-color: #fff;
    color: #000;
    border: 1px solid #303133;
  }

  [class*=" bg-border-"] {
    color: #303133;
  }
</style>

## Color 色彩

Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### 主题色

Element-Theme-Ink 决定以黑白色调为主。

文本选中时，色彩也为黑白。

暗亮

<template>
<el-row>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-dark">Dark<div class="value">#303133</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-light">Light<div class="value">#fafbfc</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-black">Black<div class="value">#000000</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-white">White<div class="value">#ffffff</div></div>
  </el-col>
</el-row>
</template>

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

参考 [Semantic-UI](https://semantic-ui.com) 使用更为鲜艳的颜色。

<template>
<el-row>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-blue">Blue<div class="value">#0078E7</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-success">Success<div class="value">#21ba45</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-warning">Warning<div class="value">#f2711c</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-danger">Danger<div class="value">#db2828</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-info">Info<div class="value">#42B8DD</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-purple">Purple<div class="value">#8e71c1</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-gray">Gray<div class="value">#eeeeee</div></div>
  </el-col>
</el-row>
</template>

### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<template>
<el-row>
  <el-col :span="12">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-text-primary">主要文字<div class="value">#303133</div></div>
      <div class="demo-color-box bg-text-regular">常规文字<div class="value">#606266</div></div>
      <div class="demo-color-box bg-text-secondary">次要文字<div class="value">#909399</div></div>
      <div class="demo-color-box bg-text-placeholder">占位文字<div class="value">#C0C4CC</div></div>
    </div>
  </el-col>
  <el-col :span="12">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-border-base">一级边框<div class="value">#DCDFE6</div></div>
      <div class="demo-color-box bg-border-light">二级边框<div class="value">#E4E7ED</div></div>
      <div class="demo-color-box bg-border-lighter">三级边框<div class="value">#EBEEF5</div></div>
      <div class="demo-color-box bg-border-extra-light">四级边框<div class="value">#F2F6FC</div></div>
    </div>
  </el-col>
</el-row>
</template>
