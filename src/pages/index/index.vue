<template>
  <div>
    <myheader/>
    <mymain/>
  </div>
</template>
<script>
  import myheader from './header.vue';
  import mymain from './main.vue';
  export default {
    name: 'index',
    components: {
      myheader,
      mymain
    },
  };
</script>
