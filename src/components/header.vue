<template>
  <el-header id = "header" height = "118px">
    <el-row align = "middle" justify = "space-between" type = "flex">
      <router-link to = "/">
        <img v-if = "isdemo" id = "logo" alt = "" src = "@/assets/logo-demo.png">
        <img v-else id = "logo" alt = "" src = "@/assets/logo.png">
      </router-link>
      <div id = "menu">
        <router-link style = "text-decoration: none;" to = "/demo">
          <div id = "introduction">在线体验</div>
        </router-link>
        <ul v-if = "isdemo" id = "language">
          <li class = "demo_active">Language：</li>
          <li :class = "{ demo_active: isactive }" @click = "change_language">中</li>
          <li id = "line"></li>
          <li :class = "{ demo_active: !isactive }" @click = "change_language">EN</li>
        </ul>
        <ul v-else id = "language">
          <li class = "active">Language：</li>
          <li :class = "{ active: isactive }" @click = "change_language">中</li>
          <li id = "line"></li>
          <li :class = "{ active: !isactive }" @click = "change_language">EN</li>
        </ul>
      </div>
    </el-row>
  </el-header>
</template>

<script>
  export default {
    name: 'myheader',
    props: {
      isdemo: {
        type: Boolean,
        default: false,
      },
    },
    data: function() {
      return {
        isactive: true,
      };
    },
    methods: {
      change_language: function() {
        this.isactive = !this.isactive;
      },
    },
  };
</script>

<style lang = "scss" scoped>
  
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
        
        .demo_active {
          color: #333;
        }
        
        #line {
          margin: 0 8px;
          width: 2px;
          height: 15.26px;
          background: rgb(121, 121, 121);
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
