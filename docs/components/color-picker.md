---
title: 颜色选择器
---

<script>
  export default {
    data() {
      return {
        color1: '#000',
        color2: null,
        color3: 'rgba(19, 206, 102, 0.8)',
        color4: '#409EFF'
      };
    },
  }
</script>

<style lang="scss" scoped>
  .block {
    text-align: center;
    padding: 20px 0 40px;
  }
  .demonstration {
    display: block;
    margin-bottom: 20px;
  }
</style>

用于颜色选择，支持多种格式。

### 基础用法

[ColorPicker](http://element.eleme.io/#/zh-CN/component/color-picker)

使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。

<demo-block>
  <el-col :span="12" class="block">
    <span class="demonstration">有默认值</span>
    <el-color-picker v-model="color1"></el-color-picker>
  </el-col>
  <el-col :span="12" class="block">
    <span class="demonstration">无默认值</span>
    <el-color-picker v-model="color2"></el-color-picker>
  </el-col>
</demo-block>

### 选择透明度

ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过`show-alpha`属性即可控制是否支持透明度的选择。

<demo-block>
  <el-color-picker v-model="color3" show-alpha></el-color-picker>
</demo-block>

### 不同尺寸

<demo-block>
  <el-color-picker v-model="color4"></el-color-picker>
  <el-color-picker v-model="color4" size="medium"></el-color-picker>
  <el-color-picker v-model="color4" size="small"></el-color-picker>
  <el-color-picker v-model="color4" size="mini"></el-color-picker>
</demo-block>
