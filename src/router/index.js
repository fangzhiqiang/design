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
import g_modify from '../views/Goods/Modify.vue'

//互助页面
import Help from '../views/Help.vue'
import Hindex from '../views/Help/Index.vue'
import Hdetail from '../views/Help/Hdetail.vue'
import Hget from '../views/Help/Hget.vue'
import Hadd from '../views/Help/Hadd.vue'
import Hmanage from '../views/Help/Hmanage.vue'
import Hchat from '../views/Help/Hchat.vue'
import Hchat_detail from '../views/Help/Hchat_detail.vue'
import h_modify from '../views/Help/Modify.vue'
import h_order from '../views/Help/Order.vue'
import g_detail from '../views/Help/Get_detail.vue'

//活动页面
import Aindex from '../views/Activity/Index.vue'
import Activity from '../views/Activity.vue'
import Act_detail from '../views/Activity/Act_detail.vue'
import Luck from '../views/Activity/Luck.vue'
import Aadd from '../views/Activity/Aadd.vue'
import Amanage from '../views/Activity/Amanage.vue'
import Resluck from '../views/Activity/Resluck.vue'
import Ressign from '../views/Activity/Ressign.vue'

//招聘s
import r_index from '../views/Recruit/Index.vue'
import Recruit from '../views/Recruit.vue'
import Test from '../views/Test.vue'
import r_detail from '../views/Recruit/Detail.vue'
import r_add from '../views/Recruit/Add.vue'
import r_manage from '../views/Recruit/Manage.vue'
import r_resume from '../views/Recruit/Resume.vue'
import resume_detail from '../views/Recruit/Resume_detail.vue'


//
import m_index from '../views/My/Index.vue'



Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'goods',
    component: Goods,
    
  },
  
  {
    path:'/test',
    name: 'test',
    component:Test
  },
  //二手交易路由
  {
    path: '/goods',
    name: 'goods',
    component: Goods,
    children:[
      {
        path:'index',
        name: 'index',
        component:Index
      },
      {
        path:'modify',
        name: 'g_modify',
        component:g_modify
      },
      {
        path:'chat',
        name: 'chat',
        component:Chat
      },
      {
        path:'order',
        name: 'order',
        component:Order
      },
      {
        path:'manage',
        name: 'manage',
        component:Manage
      },
      {
        path:'add',
        component:Add
      },
      {
        path:'buy',
        name: 'buy',
        component:Buy
      },
      {
        path:'pay',
        name: 'pay',
        component:Pay
      },

      {
        path:'order_detail',
        name: 'order_detail',
        component:Order_detail
      },
      {
        path:'chat_detail',
        name: 'chat_detail',
        component:Chat_detail
      },
      {
        path:':id',
        name: 'details',
        component:Details
      },
      
    ]
  },
  //互助路由
  {
    path:'/help',
    component:Help,
    children:[
      {
        path:'index',
        component:Hindex
      },
      {
        path:'g_detail',
        component:g_detail
      },
      {
        path:'modify',
       
        component:h_modify
      },
      {
        path:'order',
        component:h_order
      },
      {
        path:'get',
        name: 'Hget',
        component:Hget
      },
      {
        path:'add',
        name: 'Hadd',
        component:Hadd
      },
      {
        path:'manage',
        name: 'Hmanage',
        component:Hmanage
      },
      {
        path:'chat',
        name: 'Hchat',
        component:Hchat
      },
      {
        path:'Hchat_detail',
        name: 'Hchat_detail',
        component:Hchat_detail
      },
      {
        path:':id',
        name: 'Hdetail',
        component:Hdetail
      },

    ]
  },

  //活动路由
  {
    path:'/activity',
    component:Activity,
    name: 'Activity',
    children:[
      {
        name: 'Aindex',
        path:'index',
        component:Aindex
      },
     
      {
        name: 'Luck',
        path:'luck',
        component:Luck
      },
      {
        path:'add',
        name: 'Aadd',
        component:Aadd,
      },
      {
        path:'manage',
        name: 'Amanage',
        component:Amanage,
      },
      {
        path:'res_luck',
        name: 'Resluck',
        component:Resluck,
      },
      {
        path:'res_sign',
        name: 'Ressign',
        component:Ressign,
      },
      
      {
        path:':id',
        name: 'Act_detail',
        component:Act_detail
      },
    ]
  },

  {
    path:'/recruit',
    component:Recruit,
    name: 'Recruit',
    children:[
      {
        path:'index',
        name: 'r_index',
        component:r_index,
      },
      {
        path:'detail',
        name: 'r_detail',
        component:r_detail,
      },
      {
        path:'add',
        name: 'r_add',
        component:r_add,
      },
      {
        path:'manage',
        name: 'r_manage',
        component:r_manage,
      },
      {
        path:'resume',
        name: 'r_resume',
        component:r_resume,
      },
      {
        path:'resume_detail',
        name: 'resume_detail',
        component:resume_detail,
      },
    ]
  },
  {
    path:'/my',
    component:m_index,
    name: 'm_index',
    children:[
      {
        path:'index',
        name: 'm_index',
        component:m_index,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
