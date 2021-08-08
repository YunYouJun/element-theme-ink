---
title: 进度条
---

<style lang="scss" scoped>
  .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }
  .el-progress--circle {
    margin-right: 15px;
  }
</style>

用于展示操作进度，告知用户当前状态和预期。

### 线形进度条 — 百分比外显

Progress 组件设置`percentage`属性即可，表示进度条对应的百分比，**必填**，必须在 0-100。

```html
<el-progress :percentage="30" status="dark"></el-progress>
```

<demo-block>
  <el-progress :percentage="0"></el-progress>
  <el-progress :percentage="30" color="dark"></el-progress>
  <el-progress :percentage="70"></el-progress>
  <el-progress :percentage="100" status="success"></el-progress>
  <el-progress :percentage="50" status="exception"></el-progress>
</demo-block>

### 线形进度条 — 百分比内显

百分比不占用额外控件，适用于文件上传等场景。

Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来将进度条描述置于进度条内部。

<demo-block>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="30" color="dark"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
</demo-block>

### 环形进度条

Progress 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。

<demo-block>
  <el-progress type="circle" :percentage="0"></el-progress>
  <el-progress type="circle" :percentage="25"></el-progress>
  <el-progress type="circle" :percentage="25" color="#000"></el-progress>
  <el-progress type="circle" :percentage="100" status="success"></el-progress>
  <el-progress type="circle" :percentage="50" status="exception"></el-progress>
</demo-block>
