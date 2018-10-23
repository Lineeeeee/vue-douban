<template>
  <div v-if="moviesList.length>0" class="movies">
    <div >
      <h5>
        {{this.title}}
      </h5>
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
          <li v-for="(item,id) in moviesList" :key="id">
            <router-link :to="{name:'detail',params:{id:item.id}}">
              <img :src="item.images.large" alt="">
              <h3>{{item.title}}</h3>
            </router-link>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        title:'',
        moviesList:[],
        text:this.$route.params.text
      }
    },
    created(){
      this.$store.commit('updateStart',0);
      this.$store.commit('updateCount',10)
      console.log(this.text)
    },
    mounted(){
      var start=this.$store.getters.getStart;
      var count=this.$store.getters.getCount;
      this.$axios.get(this.text+start+'&count='+count)
        .then(res=>{
          this.title=res.data.title
          this.moviesList=res.data.subjects
          this.$store.commit('updateStart',(res.data.start+count));
        });
    },
    methods:{
      //数据追加
      loadMore(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        this.loading = true;
        var start=this.$store.getters.getStart;
        var count=this.$store.getters.getCount;
        setTimeout(()=>{
          this.$axios.get(this.text+start+'&count='+count)
            .then(res=>{
              this.moviesList=this.moviesList.concat(res.data.subjects)
              this.$store.commit('updateStart',(res.data.start+count));
            })
          Indicator.close();
        },2000)
      }
    }
  }
</script>
<style lang="less" scoped>
  .movies{
    background-color: #eee;
    h5{
      padding:20px 22px;
      margin:0;
      background-color: #eee;
      .more{
        float: right;
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