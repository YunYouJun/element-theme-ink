<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        value6: 0,
        value7: 0,
        value8: 0,
        value9: [4, 8],
        value10: 0
      };
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>

<style>
  .demo-box.demo-slider .source {
    padding: 0;
  }

  .demo-box.demo-slider .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;
    }
  }

  .demo-box.demo-slider .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demo-box.demo-slider .demonstration + .el-slider {
    float: right;
    width: 70%;
    margin-right: 20px;
  }
</style>

## Slider 滑块

通过拖动滑块在一个固定区间内进行选择

### 基础用法

在拖动滑块时，显示当前值

通过设置绑定值自定义滑块的初始值

<el-card shadow="hover">
  <div class="block">
    <span class="demonstration">默认</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <el-slider v-model="value2"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <el-slider v-model="value5" disabled></el-slider>
  </div>
</el-card>

### 离散值

选项可以是离散的

改变`step`的值可以改变步长，通过设置`show-step`属性可以显示间断点

<el-card shadow="hover">
  <div class="block">
    <span class="demonstration">不显示间断点</span>
    <el-slider
      v-model="value6"
      :step="10">
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">显示间断点</span>
    <el-slider
      v-model="value7"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</el-card>

### 带有输入框

通过输入框设置精确数值

设置`show-input`属性会在右侧显示一个输入框

<el-card shadow="hover">
  <div class="block">
    <el-slider
      v-model="value8"
      show-input>
    </el-slider>
  </div>
</el-card>

### 范围选择

支持选择某一数值范围

设置`range`即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值

<el-card shadow="hover">
  <div class="block">
    <el-slider
      v-model="value9"
      range
      show-stops
      :max="10">
    </el-slider>
  </div>
</el-card>

### 竖向模式

设置`vertical`可使 Slider 变成竖向模式，此时必须设置高度`height`属性

<el-card shadow="hover">
  <div class="block">
    <el-slider
      v-model="value10"
      vertical
      height="200px">
    </el-slider>
  </div>
</el-card>
