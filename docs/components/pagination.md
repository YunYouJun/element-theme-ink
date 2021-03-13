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
  .large-block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    display: inline-block;
    width: 99%;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }
  .demonstration {
    display: block;
    margin: 20px;
  }
</style>

## Pagination 分页

[Pagination](http://element.eleme.io/#/zh-CN/component/pagination)

当数据量过多时，使用分页分解数据。

### 基础用法

设置`layout`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。`prev`表示上一页，`next`为下一页，`pager`表示页码列表，除此以外还提供了`jumper`和`total`，`size`和特殊的布局符号`->`，`->`后的元素会靠右显示，`jumper`表示跳页元素，`total`表示显示页码总数，`size`用于设置每页显示的页码数量。

<el-card shadow="hover">
<div class="block">
  <span class="demonstration">页数较少时的效果</span>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
<div class="block">
  <span class="demonstration">大于 7 页时的效果</span>
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
</el-card>

### 带有背景色的分页

设置`background`属性可以为分页按钮添加背景色。

<el-card shadow="hover">
<el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
</el-card>

### 小型分页

在空间有限的情况下，可以使用简单的小型分页。

只需要一个`small`属性，它接受一个`Boolean`，默认为`false`，设为`true`即可启用。

<el-card shadow="hover">
<el-pagination
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>
</el-card>

### 附加功能

根据场景需要，可以添加其他功能模块。

此例是一个完整的用例，使用了`size-change`和`current-change`事件来处理页码大小和当前页变动时候触发的事件。`page-sizes`接受一个整型数组，数组元素为展示的选择每页显示个数的选项，`[100, 200, 300, 400]`表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。

<el-card shadow="hover">
  <div class="large-block">
    <span class="demonstration">显示总数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="large-block">
    <span class="demonstration">调整每页显示条数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="large-block">
    <span class="demonstration">直接前往</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  <div class="large-block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</el-card>

<script>
  import { addClass } from 'element-ui/src/utils/dom';
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source');
        let firstDemo = demos[0];
        let lastDemo = demos[demos.length - 1];
        addClass(firstDemo, 'first');
        addClass(lastDemo, 'last');
      });
    }
  }
</script>
