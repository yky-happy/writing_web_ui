<template>
  <div id = "app">
    <router-view></router-view>
  </div>
</template>


<script>
  
  export default {
    name: 'App',
    // 组件代码
  };
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  
  /* 滚动条样式 */
  ::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: rgba(73, 177, 245, 0.2);
    border-radius: 2em;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #1979FF;
    background-image: -webkit-linear-gradient(45deg,
    rgba(255, 255, 255, 0.4) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.4) 75%,
    transparent 75%,
    transparent);
    border-radius: 2em;
  }
  
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  
  ::-moz-selection {
    background-color: #1979FF;
    color: #fff;
  }

</style>

