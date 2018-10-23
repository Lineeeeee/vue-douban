import VueRouter from 'vue-router'

//导入组件
import moviesVue from './components/Movies.vue'
import movielistVue from './components/Movie-list.vue'
import moviedetailVue from './components/Movie-detail.vue'
import searchlistVue from './components/Search-list.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [  //配置路由规则
    {path:'/',redirect:'/movies'},
    {path:'/movies',name:'movies',component:moviesVue},
    {path:'/movies/list/:text',name:'list',component:movielistVue},
    {path:'/movies/detail/:id',name:'detail',component:moviedetailVue},
    {path:'/movies/search/:text',name:'search',component:searchlistVue}
  ]
})

// 把路由对象暴露出去
export default router