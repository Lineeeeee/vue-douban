<template>
  <div class="app">
   <!--header-->
    <header-vue></header-vue>

    <router-view></router-view>
  </div>
</template>

<script>
  import headerVue from './components/Header.vue'
export default {
  data() {
    return {

    }
  },
  components:{
    headerVue,
  },
  methods: {

  }
};
</script>


<style lang="less" scoped>
.app{
  background-color: #eee;
  padding-top:40px;
}



</style>
