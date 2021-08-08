---
title: 评分
---

<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: 3.7
      };
    },
  }
</script>

<style lang="scss" scoped>
  .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }

  .demonstration {
    display: block;
    color: #303133;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

评分组件

### 基础用法

评分被分为三个等级，可以利用颜色对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用过`colors`属性设置，而它们对应的两个阈值则通过 `low-threshold` 和 `high-threshold` 设定。

<demo-block>
  <div class="block">
    <span class="demonstration">默认不区分颜色</span>
    <el-rate v-model="value1"></el-rate>
  </div>
  <div class="block">
    <span class="demonstration">区分颜色</span>
    <el-rate
      v-model="value2"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>
  </div>
</demo-block>

### 辅助文字

用辅助文字直接地表达对应分数

为组件设置 `show-text` 属性会在右侧显示辅助文字。通过设置 `texts` 可以为每一个分值指定对应的辅助文字。`texts` 为一个数组，长度应等于最大值 `max`。

<template>
<demo-block>
<el-rate
  v-model="value3"
  show-text>
</el-rate>
</demo-block>
</template>
