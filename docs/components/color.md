---
title: 色彩
---


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
