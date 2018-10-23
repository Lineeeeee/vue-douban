<template>
  <div class="detail" v-if="movie.title">
     <h3>{{movie.title }}&nbsp;{{getOriginalTitle}}</h3>
     <div class="pic">
       <img :src="movie.images.large" alt="">
       <p>{{getMeta}}</p>
       <div>
         <a class="left" href="#">想看({{movie.wish_count}})</a>
         <a class="right" href="#">看过</a>
       </div>
     </div>
     <div class="main">
       <h3>{{movie.title}}的剧情介绍</h3>
       <p>
         {{movie.summary}}
       </p>
     </div>

  </div>
</template>
<script>
  import headerVue from './Header.vue'
  export default {
    data(){
      return{
        movie:{}
      }
    },
    computed:{
      getMeta(){
        var cast=this.movie.casts.reduce((name,value)=>{
              return name ? name +' / '+value.name : value.name;
        },'');
        return this.movie.countries.join(' / ') + ' / '+this.movie.genres.join(' / ') + ' / '+this.movie.directors[0].name +'(导演) / ' + cast;
      },
      getOriginalTitle(){
        return /([A-Za-z])/g.test(this.movie.original_title)? this.movie.original_title : '';
      },
    },
    mounted(){
      let id=this.$route.params.id
      this.$axios.get('https://node-douban-api.herokuapp.com/movie/subject/'+id)
        .then(res=>{
          this.movie=res.data
        })
    }
  }
</script>
<style lang="less" scoped>
  .detail{
    background-color: #fff;
    margin-top: 10px;
    padding:0 10px;
    border-radius: 10px;
    h3{
      padding-top:10px;
      font-size: 16px;
      line-height: 32px;
    }
    .pic{
      padding-bottom: 15px;
      img{
        width:100%;
      }
      p{
        padding:20px 0;
        font-size: 16px;
        color:#000
      }
      div{
        a{
          border-radius: 3px;
          border:1px solid #ffb712;
          color: #ffb712;
          text-align: center;
          font-size: 15px;
          padding:8px 0;
          line-height: 34px;
          &.left{
            padding:8px 50px;
          }
          &.right{
            margin-left: 20px;
            padding:8px 70px;

          }
        }
      }
    }
    .main{
      p{
        text-indent: 2em;
        line-height: 30px;
        font-size: 16px;
        margin-bottom: 0px;
      }
    }
  }

</style>