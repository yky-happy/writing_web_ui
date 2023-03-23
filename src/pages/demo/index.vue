<template>
  <div id="root">
    <myheader :isdemo="true" />
    <div id = "main">
      <myeditor />
      <myresponce />
    </div>
  </div>
</template>

<script>
  import myheader from '@/components/header.vue';
  import myeditor from './editor.vue';
  import myresponce from './responce.vue';
  export default {
    name: 'demo',
    components: {
      myheader,
      myeditor,
      myresponce,
    },
  };
</script>

<style scoped lang="scss">
  #root{
    padding: 0 6vw;
    
    #main{
      background: #f8fafe;
      border-radius: 12px;
  
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
</style>
