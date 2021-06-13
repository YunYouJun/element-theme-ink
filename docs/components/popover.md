---
title: 弹出框
---

### 基础用法

Popover 的属性与 Tooltip 很类似，它们都是基于`Vue-popper`开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。

::: tip
`trigger` 属性用于设置何时触发 Popover，支持四种触发方式：`hover`，`click`，`focus` 和 `manual`。对于触发 Popover 的元素，有两种写法：使用 `#reference` 的具名插槽，或使用自定义指令 `v-popover` 指向 Popover 的索引 `ref`。
:::

<el-card>
  <el-popover
    placement="top-start"
    title="标题"
    :width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
    <template #reference>
      <el-button>hover 激活</el-button>
    </template>
  </el-popover>
  <el-popover
    placement="bottom"
    title="标题"
    :width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
    <template #reference>
      <el-button>click 激活</el-button>
    </template>
  </el-popover>
  <el-popover
    ref="popover"
    placement="right"
    title="标题"
    :width="200"
    trigger="focus"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
    <template #reference>
      <el-button>focus 激活</el-button>
    </template>
  </el-popover>
  <el-popover
    placement="bottom"
    title="标题"
    :width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model:visible="visible"
    >
    <template #reference>
      <el-button @click="visible = !visible">手动激活</el-button>
    </template>
  </el-popover>
</el-card>

<script>
export default {
  data() {
    return {
      visible: false
    };
  }
};
</script>

<style scoped>
.el-popover {
  margin-left: 10px;
}
</style>
