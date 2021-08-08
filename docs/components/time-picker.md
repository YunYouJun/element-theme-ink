---
title: 时间选择器
---

<style lang="scss" scoped>
  .el-date-editor + .el-date-editor {
    margin-left: 10px;
  }
</style>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: new Date(2016, 9, 10, 18, 40),
        value3: new Date(2016, 9, 10, 18, 40),
        pickerOptions: {
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }
      };
    }
  }
</script>

用于选择或输入日期

[Time Picker](http://element.eleme.io/#/zh-CN/component/time-picker)

### 固定时间点

提供几个固定的时间点供用户选择

<demo-block>
  <el-time-select v-model="value1" :picker-options="pickerOptions" placeholder="选择时间">
  </el-time-select>
</demo-block>

### 任意时间点

可以选择任意时间

使用 `el-time-picker` 标签，通过`selectableRange`限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开`arrow-control`属性则通过界面上的箭头进行选择。

<demo-block>
  <el-time-picker
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value3"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
</demo-block>
