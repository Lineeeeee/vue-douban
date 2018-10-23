<template>
  <div v-if="moviesList.length>0" class="movies">
   <div>
     <h5>
     {{this.title}}
     <span class="more">
       <a @click="toList(text_01)">更多&nbsp;></a>
     </span>
   </h5>
     <ul >
       <li v-for="(item,id) in moviesList" :key="id">
         <router-link :to="{name:'detail',params:{id:item.id}}">
           <img :src="item.images.large" alt="">
           <h3>{{item.title}}</h3>
         </router-link>
       </li>
     </ul>
   </div>
    <div>
      <h5>
        {{this.title_one}}
        <span class="more">
           <a @click="toList(text_02)">更多&nbsp;></a>
        </span>
      </h5>

        <ul >
          <li v-for="(item,id) in moviesList_one" :key="id">
            <a href="#">
              <img :src="item.images.large" alt="">
              <h3>{{item.title}}</h3>
            </a>
          </li>
        </ul>

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
       text_01:'https://node-douban-api.herokuapp.com/movie/in_theaters?start=',
       text_02:'https://node-douban-api.herokuapp.com/movie/coming_soon?start=',
       title:'',
       moviesList:[],
       title_one:'',
       moviesList_one:[]
      }
    },
    created(){
      var start=this.$store.getters.getStart;
      var count=this.$store.getters.getCount;
       this.$axios.get('https://node-douban-api.herokuapp.com/movie/in_theaters?start='+start+'&count='+count)
         .then(res=>{
          this.title=res.data.title
          this.moviesList=res.data.subjects
         });

      this.$axios.get('https://node-douban-api.herokuapp.com/movie/coming_soon?start='+start+'&count='+count)
        .then(res=>{
          this.title_one=res.data.title
          this.moviesList_one=res.data.subjects;
        });
    },
    methods:{
     toList(text){
       this.$router.push({name:"list",params:{text:text}})
      }
    }
  }
</script>
<style lang="less" scoped>
@import "../lib/less/rest.less";
  .movies{
    background-color: #eee;
    h5{
      padding:20px 22px;
      margin:0;
      background-color: #eee;
      .more{
        float: right;
        a{
          color: #999;
        }
      }
    }
    ul{
      list-style: none;
      margin:0 15px;
      background-color: #fff;
      border-radius:10px;
      padding-left: 0;
      overflow: hidden;
      li{
        padding:15px 15px;
        text-align: center;
        float: left;
        a{
          display: block;
          width:98px;
          height: 160.4px;
          overflow: hidden;
          text-overflow: ellipsis;
          img{
            width:100%;
            height:137px;
          }
          h3{
            font-size: 15px;
            font-weight: 400;
            color: #494949;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
</style>