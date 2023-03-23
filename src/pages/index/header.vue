<template>
  <el-container id = "head-block">
    <myheader/>
    <el-main id = "main">
      <img src = "@/assets/subtitle.svg" id = "subtitle">
      <p id = "description">
        智能创作助手 Effidit（Efficient and Intelligent Editing） 是由腾讯 AI Lab 开发的一个研究性原型系统，
        探索用 AI 技术提升写作者的写作效率和创作体验（在线体验推荐使用 Chrome 或 Microsoft Edge 浏览器）
      </p>
      <div id = "footer">
        <a class = "button">
          <i class = "el-icon-download"></i>
          <p>客户端下载</p>
        </a>
        <router-link to="/demo" class="button">
          <i class = "el-icon-edit"></i>
          <p>在线体验</p>
        </router-link>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import myheader from '@/components/header.vue';
  export default {
    name: 'header',
    components: {
      myheader
    },
    data: function() {
      return {
        isactive: true
      };
    },
    methods: {
      change_language: function() {
        this.isactive = !this.isactive;
      }
    }
  };
</script>

<style scoped lang = "scss">
  #head-block {
    width: 100%;
    height: calc(100vw * 655 / 1456);
    background-size: cover;
    background-image: url(@/assets/banner.png);
    background-repeat: no-repeat;
    flex-direction: column;
  }
  
  #main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    #subtitle {
      width: 420px;
      display: block;
      margin: 90px auto 0;
    }
    
    #description {
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
    display: inline-table;
    margin: 42px auto 0;
    
    .button {
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
      -webkit-transition: all .3s ease-out;
      transition: all .3s ease-out;
      cursor: pointer;
      
      p {
        display: inline-block;
        margin: 0;
        color: #fff;
        font-size: 20px;
        position: relative;
        padding-left: 10px;
      }
      
      i {
        width: 20px;
        height: 20px;
        color: white;
      }
    }
  }
</style>
