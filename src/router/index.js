import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../views/Goods.vue'
import Index from '../views/Goods/Index.vue'
import Chat from '../views/Goods/Chat.vue'
import Order from '../views/Goods/Order.vue'
import Manage from '../views/Goods/Manage.vue'
import Add from '../views/Goods/Add.vue'
import Details from '../views/Goods/Detail.vue'
import Buy from '../views/Goods/Buy.vue'
import Pay from '../views/Goods/Pay.vue'
import Order_detail from '../views/Goods/Order_detail.vue'
import Chat_detail from '../views/Goods/Chat_detail.vue'


Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'goods',
    component: Goods,
    
  },
  

  //二手交易路由
  {
    path: '/goods',
    name: 'goods',
    component: Goods,
    children:[
      {
        path:'index',
        component:Index
      },
      {
        path:'chat',
        component:Chat
      },
      {
        path:'order',
        component:Order
      },
      {
        path:'manage',
        component:Manage
      },
      {
        path:'add',
        component:Add
      },
      {
        path:'buy',
        component:Buy
      },
      {
        path:'pay',
        component:Pay
      },
      {
        path:'order',
        component:Order
      },
      {
        path:'order_detail',
        component:Order_detail
      },
      {
        path:'chat_detail',
        component:Chat_detail
      },
      {
        path:':id',
        component:Details
      },
      
    ]
  },
  //互助路由
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
