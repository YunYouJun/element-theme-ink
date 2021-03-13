<script>
  const data = [{
    label: '一级 1',
    children: [{
      label: '二级 1-1',
      children: [{
        label: '三级 1-1-1'
      }]
    }]
  }, {
    label: '一级 2',
    children: [{
      label: '二级 2-1',
      children: [{
        label: '三级 2-1-1'
      }]
    }, {
      label: '二级 2-2',
      children: [{
        label: '三级 2-2-1'
      }]
    }]
  }, {
    label: '一级 3',
    children: [{
      label: '二级 3-1',
      children: [{
        label: '三级 3-1-1'
      }]
    }, {
      label: '二级 3-2',
      children: [{
        label: '三级 3-2-1'
      }]
    }]
  }];

  const data3 = [{
    id: 1,
    label: '一级 2',
    children: [{
      id: 3,
      label: '二级 2-1',
      children: [{
        id: 4,
        label: '三级 3-1-1'
      }, {
        id: 5,
        label: '三级 3-1-2',
        disabled: true
      }]
    }, {
      id: 2,
      label: '二级 2-2',
      disabled: true,
      children: [{
        id: 6,
        label: '三级 3-2-1'
      }, {
        id: 7,
        label: '三级 3-2-2',
        disabled: true
      }]
    }]
  }];

  let id = 1000;

  const regions = [{
    'name': 'region1'
  }, {
    'name': 'region2'
  }];

  let count = 1;

  const props = {
    label: 'name',
    children: 'zones'
  };

  const props1 = {
    label: 'name',
    children: 'zones',
    isLeaf: 'leaf'
  };

  const defaultProps = {
    children: 'children',
    label: 'label'
  };

  export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);
        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;          
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(function() {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + count++
            }, {
              name: 'zone' + count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      },
    },

    data() {
      return {
        data,
        data3,
        regions,
        defaultProps,
        props,
        props1,
        defaultCheckedKeys: [5],
        defaultExpandedKeys: [2, 3],
        filterText: ''
      };
    }
  };
</script>

## Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

### 基础用法

基础的树形结构展示。

<el-card shadow="hover">
<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</el-card>

### 可选择

适用于需要选择层级时使用。

本例还展示了动态加载节点数据的方法。

<el-card shadow="hover">
<el-tree
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox
  @check-change="handleCheckChange">
</el-tree>
</el-card>

### 禁用状态
可将 Tree 的某些节点设置为禁用状态

通过`disabled`设置禁用状态。

<el-card shadow="hover">
<el-tree
  :data="data3"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]">
</el-tree>
</el-card>