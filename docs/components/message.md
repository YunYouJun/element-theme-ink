<script>
  module.exports = {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },

      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      }
    }
  };
</script>

## Message 消息提示

[Message](http://element.eleme.io/#/zh-CN/component/message)

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

### 基础用法

从顶部出现，3 秒后自动消失。

不同状态，用来显示「成功、警告、消息、错误」类的操作反馈。

<demo-block>
  <el-button :plain="true" @click="open">消息</el-button>
  <el-button :plain="true" @click="open2">成功</el-button>
  <el-button :plain="true" @click="open3">警告</el-button>
  <el-button :plain="true" @click="open4">错误</el-button>
</demo-block>
