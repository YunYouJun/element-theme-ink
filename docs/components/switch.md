<style>
  .demo-box.demo-switch {
    .el-switch {
      margin: 20px 20px 20px 0;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: '100',
        value6: true,
        value7: false
      }
    }
  };
</script>

## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。

<el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>

### 文字描述

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

<el-switch
  v-model="value3"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>

### 禁用状态

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

<el-switch
  v-model="value6"
  disabled>
</el-switch>
<el-switch
  v-model="value7"
  disabled>
</el-switch>