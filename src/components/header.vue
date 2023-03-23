<template>
  <el-header id = "header" height = "118px">
    <el-row type = "flex" justify = "space-between" align = "middle">
      <router-link to="/">
        <img src = "@/assets/logo.png" alt = "" id = "logo">
      </router-link>
      <div id = "menu">
        <router-link to="/demo">
          <div id = "introduction">在线体验</div>
        </router-link>
        <ul id = "language">
          <li class = "active">Language：</li>
          <li :class="{ active: isactive }" @click="change_language">中</li>
          <li id = "line"></li>
          <li :class="{ active: !isactive }">EN</li>
        </ul>
      </div>
    </el-row>
  </el-header>
</template>

<script>
  export default {
    name: 'header',
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
    
    #menu {
      display: flex;
      
      #introduction {
        font-size: 16px;
        color: #1979ff;
        font-weight: 700;
        letter-spacing: 1.33px;
      }
      
      #language {
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0;
        
        .active {
          color: #fff;
        }
        
        #line {
          margin: 0 8px;
          width: 1px;
          height: 15.26px;
          background: #e5e9eb;
          opacity: .3;
          cursor: inherit;
        }
        
        li {
          list-style: none;
          font-size: 16px;
          color: #999;
          letter-spacing: 1.33px;
          cursor: pointer;
        }
      }
    }
    
  }
  
</style>
