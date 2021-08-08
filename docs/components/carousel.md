<style lang="scss" scoped>
  .block {
    padding: 30px;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .el-carousel__container {
    text-align: center;
  }
  .el-carousel__item {
    h3 {
      text-align: center;
      color: #fff;
      font-size: 18px;
      line-height: 300px;
      margin: 0;
    }
    &:nth-child(2n) {
      background-color: #666;
    }
    &:nth-child(2n+1) {
      background-color: #303133;
    }
  }
</style>

## Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容

### 基础用法

适用广泛的基础用法

:::demo 结合使用`el-carousel`和`el-carousel-item`标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在`el-carousel-item`标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置`trigger`属性为`click`，可以达到点击触发的效果。

<demo-block>
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</demo-block>

### 指示器

可以将指示器的显示位置设置在容器外部

`indicator-position`属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为`outside`则会显示在外部；设置为`none`则不会显示指示器。

<template>
<demo-block>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</demo-block>
</template>

### 切换箭头

可以设置切换箭头的显示时机

`arrow`属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将`arrow`设置为`always`，则会一直显示；设置为`never`，则会一直隐藏。

<template>
<demo-block>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</demo-block>
</template>

### 卡片化

当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格

将`type`属性设置为`card`即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。

<template>
<demo-block>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</demo-block>
</template>
