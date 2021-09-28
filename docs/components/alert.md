---
title: 警告
---

<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
<style lang="scss" scoped>
  .el-alert {
    margin: 20px 0 0;
  }

  .el-alert:first-child {
    margin: 0;
  }
</style>

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。

Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。

<demo-block>
  <el-alert
    title="成功提示的文案"
    type="success"
    show-icon>
  </el-alert>
  <el-alert
    title="消息提示的文案"
    type="info"
    show-icon>
  </el-alert>
  <el-alert
    title="警告提示的文案"
    type="warning"
    show-icon>
  </el-alert>
  <el-alert
    title="错误提示的文案"
    type="error"
    show-icon>
  </el-alert>
</demo-block>

### 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。

除了必填的`title`属性外，你可以设置`description`属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。

<demo-block>
  <el-alert
    title="带辅助性文字介绍"
    type="success"
    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
  </el-alert>
</demo-block>

### 带有 icon 和辅助性文字介绍

最后，这是一个同时具有 icon 和辅助性文字的样例。

<demo-block>
  <el-alert
    title="成功提示的文案"
    type="success"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
  <el-alert
    title="消息提示的文案"
    type="info"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
  <el-alert
    title="警告提示的文案"
    type="warning"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
  <el-alert
    title="错误提示的文案"
    type="error"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
</demo-block>
