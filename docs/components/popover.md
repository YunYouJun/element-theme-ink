<style scoped>
.el-popover {
  margin-left: 10px;
}
</style>

## Popover 弹出框

### 基础用法

Popover 的属性与 Tooltip 很类似，它们都是基于`Vue-popper`开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。

设置索引`ref`，在按钮中，我们注册了自定义指令`v-popover`，指向索引 ID。`trigger`属性用于设置何时触发 Popover ，提供三种触发方式：`hover`, `click` 和 `focus`。第二种用法通过 `slot` 指定 reference。

<template>
  <el-card shadow="hover">
    <el-row>
      <el-col :span="8" :xs="{span: 24}">
        <el-popover
          ref="popover1"
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="hover 激活 这是一段内容,这是一段内容,这是一段内容。">
        </el-popover>
        <el-button v-popover:popover1>hover 激活</el-button>
      </el-col>
      <el-col :span="8" :xs="{span: 24}">
        <el-popover
          ref="popover2"
          placement="bottom"
          title="标题"
          width="200"
          trigger="click"
          content="click 激活 这是一段内容,这是一段内容,这是一段内容。">
        </el-popover>
        <el-button v-popover:popover2>click 激活</el-button>
      </el-col>
      <el-col :span="8" :xs="{span: 24}">
        <el-popover
          placement="right"
          title="标题"
          width="200"
          trigger="focus"
          content="focus 激活 这是一段内容,这是一段内容,这是一段内容。">
          <el-button slot="reference">focus 激活</el-button>
        </el-popover>
      </el-col>
    </el-row>
  </el-card>
</template>
