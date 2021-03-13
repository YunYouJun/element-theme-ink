<script>
  export default {
    data() {
      return {
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }],
        fileList2: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }],
        fileList3: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }],
        imageUrl: '',
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      beforeUpload(file) {
        if (file.size > 40000000) {
          console.warn(file.name + ' is too large!');
          return false;
        }
        return true;
      },
      handlePreview(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>

## Upload 上传

通过点击或者拖拽上传文件

### 点击上传

<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
<el-button size="small" type="dark" plain>点击上传</el-button>

  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>

### 照片墙

使用 `list-type` 属性来设置文件列表的样式。

<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"><i class="el-icon-plus"></i>
</el-upload>

<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>

### 图片列表缩略图

<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture">
<el-button size="small" type="dark" plain>点击上传</el-button>

  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>

### 拖拽上传

<el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple><i class="el-icon-upload"></i><div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div><div class="el-upload__tip" slot="tip">只能上传 jpg/png 文件，且不超过 500kb</div>
</el-upload>
