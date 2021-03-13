---
title: 选择器
---

<script>
  export default {
    data() {
      return {
        list: null,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        options4: [],
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: '',
        value2: '',
        value3: '',
        value4: '',
        value5: [],
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: [],
        value11: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      };
    },
    mounted() {
      this.list = this.states.map(item => { return { value: item, label: item }; });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    }
  };
</script>

<style>
  .demo-select .el-select {
    width: 240px;
  }
</style>

当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法

[Select](http://element.eleme.io/#/zh-CN/component/select)

适用广泛的基础单选

<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

### 有禁用选项

在`el-option`中，设定`disabled`值为 true，即可禁用该选项

<template>
  <el-select v-model="value2" placeholder="请选择">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </el-option>
  </el-select>
</template>

### 禁用状态

选择器不可用状态

为`el-select`设置`disabled`属性，则整个选择器不可用

<template>
  <el-select v-model="value3" disabled placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

### 可清空单选

包含清空按钮，可将选择器清空为初始状态

为`el-select`设置`clearable`属性，则可将选择器清空。需要注意的是，`clearable`属性仅适用于单选。

<template>
  <el-select v-model="value4" clearable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

### 基础多选

适用性较广的基础多选，用 Tag 展示已选项

为`el-select`设置`multiple`属性即可启用多选，此时`v-model`的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapse-tags`属性将它们合并为一段文字。

<template>
  <el-select v-model="value5" multiple placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

### 分组

备选项进行分组展示

使用`el-option-group`对备选项进行分组，它的`label`属性为分组名

<template>
  <el-select v-model="value7" placeholder="请选择">
    <el-option-group
      v-for="group in options3"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
</template>

### 创建条目

可以创建并选中选项中不存在的条目

使用`allow-create`属性即可通过在输入框中输入文字来创建新的条目。注意此时`filterable`必须为真。本例还使用了`default-first-option`属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。

<template>
  <el-select
    v-model="value10"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="请选择文章标签">
    <el-option
      v-for="item in options5"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
