import Vue from 'vue'
import Router from 'vue-router'
import ttMainPage from '../components/tt-main-page'
import ttConstructorEats from '../components/tt-eats-constructor'

Vue.use(Router);

let router=new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'MainPage',
            component: ttMainPage
        },
        {
            path:'/constructor',
            name:'constructor',
            component: ttConstructorEats
        }
    ]
})

export default router;