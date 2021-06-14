---
title: 卡片
---

将信息聚合在卡片容器中展示。

### 基础用法

包含标题，内容和操作。

Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。

鼠标悬浮或触屏点击时，阴影渐变。 已新增于 [Element 2.3.3](https://github.com/ElemeFE/element/releases/tag/v2.3.3)

<el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>

### 简单卡片

卡片可以只有内容区域。

<el-card shadow="hover">
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>

### 带图片

可配置定义更丰富的内容展示。

配置`body-style`属性来自定义`body`部分的`style`。

  <el-row>
    <el-col :sm="{span:8}" :xs="{span:24}" >
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <img src="https://vuejs.org/images/logo.png" class="image">
        <div style="padding: 14px;">
          <span>Vue</span>
          <div class="bottom clearfix">
            <span class="description">渐进式 JavaScript 框架</span>
            <el-button type="success" plain class="button">按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

### 卡片阴影

可对阴影的显示情况进行配置。

`always`、`hover`、`never`，通过设置`shadow`属性来配置卡片阴影。

  <el-row :gutter="12">
    <el-col :span="8">
      <el-card shadow="always">
        总是显示
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover">
        鼠标悬浮时显示
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="never">
        从不显示
      </el-card>
    </el-col>
  </el-row>

<style>
  .description {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
