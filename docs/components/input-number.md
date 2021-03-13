<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 5,
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1,
        num8: 1
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
<style>
  .el-input-number + .el-input-number {
    margin-left: 10px;
  }
</style>

## InputNumber 计数器

仅允许输入标准的数字值，可定义范围

### 基础用法

[Input-number](http://element.eleme.io/#/zh-CN/component/input-number)

<template>
  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>

### 禁用状态

`disabled`属性接受一个`Boolean`，设置为`true`即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置`min`属性和`max`属性，不设置`min`和`max`时，最小值为 0。

<template>
  <el-input-number v-model="num2" :disabled="true"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num2: 1
      }
    }
  };
</script>

### 尺寸

`medium`、`small`、`mini` 三种尺寸的数字输入框

<template>
  <el-input-number v-model="num4"></el-input-number>
  <el-input-number size="medium" v-model="num5"></el-input-number>
  <el-input-number size="small" v-model="num6"></el-input-number>
  <el-input-number size="mini" v-model="num7"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1
      }
    }
  };
</script>

### 按钮位置

设置 `controls-position` 属性可以控制按钮位置。

<template>
  <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num8: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
