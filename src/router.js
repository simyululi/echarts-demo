import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
          path:'/',
          name:'home',
          component:()=>import('@/pages/home')
        }
    ]
})
