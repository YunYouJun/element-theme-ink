## Breadcrumb 面包屑
显示当前页面的路径，快速返回之前的任意页面。

### 图标分隔符

通过设置 `separator-class` 可使用相应的 `iconfont` 作为分隔符，注意这将使 `separator` 设置失效

---

<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>

---
