---
title: 通知
---

<script>
  module.exports = {
    methods: {
      open() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      },

      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },

      open7() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open8() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open9() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open10() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      },

      onClose() {
        console.log('Notification 已关闭');
      }
    }
  };
</script>

悬浮出现在页面角落，显示全局的通知提醒消息。

### 基本用法

适用性广泛的通知栏

<template>
<el-card shadow="hover">
  <el-button
    plain
    @click="open">
    可自动关闭
  </el-button>
  <el-button
    plain
    @click="open2">
    不会自动关闭
    </el-button>
</el-card>
</template>

### 带有倾向性

带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息

:::demo Element 为 Notification 组件准备了四种通知类型：`success`, `warning`, `info`, `error`。通过`type`字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入`type`字段的情况下像`open5`和`open6`那样直接调用。

<template>
<el-card shadow="hover">
  <el-button
    plain
    @click="open3">
    成功
  </el-button>
  <el-button
    plain
    @click="open4">
    警告
  </el-button>
  <el-button
    plain
    @click="open5">
    消息
  </el-button>
  <el-button
    plain
    @click="open6">
    错误
  </el-button>
</el-card>
</template>

### 自定义弹出位置

可以让 Notification 从屏幕四角中的任意一角弹出

使用`position`属性定义 Notification 的弹出位置，支持四个选项：`top-right`、`top-left`、`bottom-right`、`bottom-left`，默认为`top-right`。

<template>
<el-card shadow="hover">
  <el-button
    plain
    @click="open7">
    右上角
  </el-button>
  <el-button
    plain
    @click="open8">
    右下角
  </el-button>
  <el-button
    plain
    @click="open9">
    左下角
  </el-button>
  <el-button
    plain
    @click="open10">
    左上角
  </el-button>
</el-card>
</template>
