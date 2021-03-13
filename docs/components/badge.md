<style lang="scss" scoped>
  .el-dropdown {
    vertical-align: middle;
  }
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
  .share-button {
    width: 36px;
    padding: 10px;
  }
</style>

## Badge 标记

[Badge](http://element.eleme.io/#/zh-CN/component/datetime-picker)

出现在按钮、图标旁的数字或状态标记。

### 基础用法

展示新消息数量。

定义`value`属性，它接受`Number`或者`String`。

<template>
  <el-card shadow="hover">
    <el-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
      <el-button size="small" plain>回复</el-button>
    </el-badge>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix">
          评论
          <el-badge class="mark" :value="12" />
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          回复
          <el-badge class="mark" :value="3" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-card>
</template>

### 小红点

以红点的形式标注需要关注的内容。

除了数字外，设置`is-dot`属性，它接受一个`Boolean`。

<template>
  <el-card shadow="hover">
    <el-badge is-dot class="item">
      <el-button class="share-button" icon="el-icon-share" type="dark"></el-button>
    </el-badge>
  </el-card>
</template>
