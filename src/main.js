// 入口文件
import Vue from 'vue'
import VueResource from 'vue-resource'
//引入axios
import axios from 'axios'
//挂载原型
Vue.prototype.$axios=axios
Vue.use(VueResource)
//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//引入vuex包
import Vuex from 'vuex'
//注册vuex
Vue.use(Vuex)

var store=new Vuex.Store({
  state:{
    start:0,
    count:15,
  },
  mutations:{
    updateStart(state,num){
      state.start=num
    },
    updateCount(state,num){
      state.count=num
    }

  },
  getters:{
    getStart(state){
      return state.start;
    },
    getCount(state){
      return state.count
    }

  }

})









//引入mui的样式
import './lib/mui/css/mui.min.css'
//引入muit-ui组件
import {Header,InfiniteScroll,Indicator} from 'mint-ui'
Vue.use(InfiniteScroll);
window.Indicator=Indicator
Vue.component(Header.name,Header);
//导入router.js路由模块
import router from './router.js'

//导入APP根组件
import App from './App.vue'









var  vm = new Vue({
  el: '#app',
  render: c => c(App),
  router,  //挂载路由对象到VM实例上
  store
})