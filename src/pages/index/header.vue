<template>
  <el-container id="head-block">
    <!-- 头部组件 -->
    <myheader />
    <el-main id="main">
      <!-- 子标题 -->
      <img id="subtitle" src="@/assets/subtitle.svg" />
      <!-- 描述 -->
      <p id="description">
        智能创作助手 Effidit（Efficient and Intelligent Editing） 是由腾讯 AI Lab 开发的一个研究性原型系统，
        探索用 AI 技术提升写作者的写作效率和创作体验（在线体验推荐使用 Chrome 或 Microsoft Edge 浏览器）
      </p>
      <!-- 底部区域 -->
      <div id="footer">
        <!-- 客户端下载按钮 -->
        <a class="button" @click="download">
          <i class="el-icon-download"></i>
          <p>客户端下载</p>
        </a>
        <!-- 在线体验按钮 -->
        <router-link class="button" to="/demo">
          <i class="el-icon-edit"></i>
          <p>在线体验</p>
        </router-link>
      </div>
      <!-- 弹出框组件 -->
      <mydialog v-model="dialogVisible" />
    </el-main>
  </el-container>
</template>

<script>
  import myheader from '@/components/header.vue';
  import mydialog from './dialog.vue';
  
  export default {
    name: 'app-header',
    components: {
      myheader,
      mydialog,
    },
    data: function () {
      return {
        // 语言切换标记
        isactive: true,
        // 下载弹出框显示标记
        dialogVisible: false,
      };
    },
    methods: {
      // 切换语言方法
      change_language: function () {
        this.isactive = !this.isactive;
      },
      // 下载方法
      download: function () {
        this.dialogVisible = !this.dialogVisible;
      },
    },
  };
</script>


<style lang="scss" scoped>
  #head-block {
    /* 头部区域 */
    width: 100%;
    height: calc(100vw * 655 / 1456);
    background-size: cover;
    background-image: url(@/assets/banner.png);
    background-repeat: no-repeat;
    flex-direction: column;
  }
  
  #main {
    /* 主体区域 */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    #subtitle {
      /* 子标题 */
      width: 420px;
      display: block;
      margin: 90px auto 0;
    }
    
    #description {
      /* 描述文字 */
      font-size: 18px;
      color: #fff;
      letter-spacing: 0;
      text-align: center;
      line-height: 32px;
      width: 700px;
      margin: 40px auto 0;
      white-space: pre-line;
    }
  }
  
  #footer {
    /* 底部区域 */
    display: inline-table;
    margin: 42px auto 0;
    
    .button {
      /* 底部按钮 */
      &:hover {
        transform: scale(1.03);
      }
      
      display: inline-block;
      width: 240px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background: #075be0;
      border-radius: 40px;
      margin: 0 12px;
      -webkit-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
      cursor: pointer;
      
      p {
        /* 按钮文字 */
        display: inline-block;
        margin: 0;
        color: #fff;
        font-size: 20px;
        position: relative;
        padding-left: 10px;
      }
      
      i {
        /* 按钮图标 */
        width: 20px;
        height: 20px;
        color: white;
      }
    }
  }
</style>
