<template>
  <div class="header">
    <mt-header fixed title="vue-豆瓣app">
      <span v-if="active" slot="left" @click="goBack">
         <b icon="back"><&nbsp;返回</b>
      </span>
    </mt-header>
    <input class="inp" v-model="text" type="search" placeholder="请输入电影名称">
    <span @click="toSearch(text)" class="mui-icon mui-icon-search search"></span>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        text:'',
        active:false
      }
    },
    created(){
      this.active=this.$route.path === "/movies" ? false : true;
    },
    methods:{
      toSearch(text){
        this.$router.push({name:"search",params:{text:text}})
        this.text='';
        this.$router.go(0);
      },
      goBack(){
        this.$router.go(-1);
      }
    },
    watch:{
      "$route.path": function(newVal,oldVal) {
        if (newVal === "/movies") {
          this.active = false;
        } else {
          this.active = true;
        }
      }
    }
  }
</script>
<style lang="less" scoped>
 .header{
   position: relative;
   b{
     font-size: 13px;
   }
   .inp{
     text-align: left;
     background-color: #fff;
     margin-bottom: 0;

   }
   .search{
     position: absolute;
     right:6px;
     top:2px;
     color: #ccc;
     width:30px;
     height:30px;
     text-align: center;
     line-height: 30px;
     font-size: 30px;
   }

 }
</style>