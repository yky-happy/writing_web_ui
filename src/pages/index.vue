<template>
  <el-container id = "head-block">
    <el-header id = "header" height = "118px">
      <el-row type = "flex" justify = "space-between" align = "middle">
        <img src = "../assets/logo.png" alt = "" id = "logo">
        <div id = "menu">
          <div id = "introduction">在线体验</div>
          <div id = "language">Language:</div>
        </div>
      </el-row>
    </el-header>
    <el-main id = "main">
      <img src = "../assets/subtitle.svg" id = "subtitle">
      <p id = "description">
        智能创作助手 Effidit（Efficient and Intelligent Editing） 是由腾讯 AI Lab 开发的一个研究性原型系统，
        探索用 AI 技术提升写作者的写作效率和创作体验（在线体验推荐使用 Chrome 或 Microsoft Edge 浏览器）
      </p>
      <div id = "footer">
        <a class = "button"><i class = "el-icon-download"></i>
          <p>客户端下载</p></a>
        <a class = "button"><i class = "el-icon-edit"></i>
          <p>在线体验</p></a>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'index',
  };
</script>

<style scoped lang = "scss">
  #head-block {
    width: 100%;
    height: calc(100vw * 655 / 1456);
    background-size: cover;
    background-image: url(../assets/banner.png);
    background-repeat: no-repeat;
  }
  
  #header {
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    
    #logo {
      width: 147px;
      height: 28px;
    }
    
    .el-row {
      height: 100%;
      margin: 0 3vw;
    }
    
    #menu{
      display: flex;
      
      #introduction {
        font-size: 16px;
        color: #1979ff;
        font-weight: 700;
        letter-spacing: 1.33px;
      }
  
      #language {
        color: white;
        font-size: 16px;
        letter-spacing: 1.33px;
      }
    }
    
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
