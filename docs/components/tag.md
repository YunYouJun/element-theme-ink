---
title: 标签
---

<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: 'Dark', type: 'dark' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

用于标记和选择。

### 基础用法

由`type`属性来选择 tag 的类型，也可以通过`color`属性来自定义背景色。

<el-card shadow="hover">
  <el-tag>标签一</el-tag>
  <el-tag type="dark">dark</el-tag>
  <el-tag type="success">success</el-tag>
  <el-tag type="info">Info</el-tag>
  <el-tag type="warning">warning</el-tag>
  <el-tag type="danger">danger</el-tag>
</el-card>

### 可移除标签

设置`closable`属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`disable-transitions`属性，它接受一个`Boolean`，true 为关闭。

<template>
<el-card shadow="hover">
  <el-tag
    v-for="tag in tags"
    :key="tag.name"
    closable
    :type="tag.type">
    {{tag.name}}
  </el-tag>
</el-card>
</template>

### 动态编辑标签

动态编辑标签可以通过点击标签关闭按钮后触发的 `close` 事件来实现

<template>
<el-card shadow="hover">
  <el-tag
    :key="tag"
    v-for="tag in dynamicTags"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)">
    {{tag}}
  </el-tag>
  <el-input
    class="input-new-tag"
    v-if="inputVisible"
    v-model="inputValue"
    ref="saveTagInput"
    size="small"
    @keyup.enter.native="handleInputConfirm"
    @blur="handleInputConfirm"
  >
  </el-input>
  <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
</el-card>
</template>

### 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

<el-card shadow="hover">
  <el-tag closable>默认标签</el-tag>
  <el-tag size="medium" closable>中等标签</el-tag>
  <el-tag size="small" closable>小型标签</el-tag>
  <el-tag size="mini" closable>超小标签</el-tag>
</el-card>
