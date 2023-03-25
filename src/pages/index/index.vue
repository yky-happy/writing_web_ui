<template>
  <div>
    <!-- 引入头部组件 -->
    <myheader />
    <!-- 引入主体组件 -->
    <mymain />
  </div>
</template>
<script>
  import myheader from './header.vue';
  import mymain from './main.vue';
  
  export default {
    name: 'index',
    components: {
      // 注册头部组件
      myheader,
      // 注册主体组件
      mymain,
    },
  };
</script>
