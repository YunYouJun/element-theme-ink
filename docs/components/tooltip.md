---
title: 文字提示
---

<script>
  export default {
    data() {
      return {
        disabled: false
      };
    }
  };
</script>

常用于展示鼠标 hover 时的提示信息。

Ink 主题推荐优先使用 light 模式。

### 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

:::tip
使用`content`属性来决定`hover`时的提示信息。由`placement`属性决定展示效果：`placement`属性值为：`方向-对齐位置`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。如`placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
:::

<demo-block>
  <div class="box">
    <div class="top">
      <el-tooltip class="item" effect="light" content="Top Left 提示文字" placement="top-start">
        <el-button plain>上左</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="Top Center 提示文字" placement="top">
        <el-button plain>上边</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="Top Right 提示文字" placement="top-end">
        <el-button plain>上右</el-button>
      </el-tooltip>
    </div>
    <div class="left">
      <el-tooltip class="item" effect="light" content="Left Top 提示文字" placement="left-start">
        <el-button plain>左上</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="Left Center 提示文字" placement="left">
        <el-button plain>左边</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="Left Bottom 提示文字" placement="left-end">
        <el-button plain>左下</el-button>
      </el-tooltip>
    </div>
    <div class="right">
      <el-tooltip class="item" effect="light" content="Right Top 提示文字" placement="right-start">
        <el-button plain>右上</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="Right Center 提示文字" placement="right">
        <el-button plain>右边</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="Right Bottom 提示文字" placement="right-end">
        <el-button plain>右下</el-button>
      </el-tooltip>
    </div>
    <div class="bottom">
      <el-tooltip class="item" effect="light" content="Bottom Left 提示文字" placement="bottom-start">
        <el-button plain>下左</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="Bottom Center 提示文字" placement="bottom">
        <el-button plain>下边</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="Bottom Right 提示文字" placement="bottom-end">
        <el-button plain>下右</el-button>
      </el-tooltip>
    </div>
  </div>
</demo-block>

<style lang="scss">
  .box {
    width: 400px;
    .top {
      text-align: center;
    }
    .left {
      float: left;
      width: 60px;
    }
    .right {
      float: right;
      width: 60px;
    }
    .bottom {
      clear: both;
      text-align: center;
    }
    .item {
      margin: 4px;
    }
  }
</style>

### 主题

Tooltip 组件提供了两个不同的主题：`dark`和`light`。

通过设置`effect`属性来改变主题，默认为`dark`。

推荐默认按钮搭配 `light` 使用， 深色按钮搭配 `dark` 使用。

<el-tooltip content="Top center" placement="top">
  <el-button type="dark" plain>Dark</el-button>
</el-tooltip>
<el-tooltip content="Bottom center" placement="bottom" effect="light">
  <el-button plain>Light</el-button>
</el-tooltip>
