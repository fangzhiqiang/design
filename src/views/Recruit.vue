<template>
  <div >
    <div style=''>
        <van-nav-bar  @click-left="onClickLeft" style='background-color: #f4f4f4;'
        :title="title"
        left-text="返回"
        left-arrow
        />
        <van-tabs @click='show_menu' v-model="active" style='z-index:100'>
          <van-tab title="首页" to='/recruit/index'></van-tab>
          <van-tab title="发布" to='/recruit/add'></van-tab>
          <van-tab title='管理' ><Menu v-if='show' :list='list' @changeShow='changeShow'></Menu></van-tab>
          <van-tab title="订单" to='/recruit/order'></van-tab>
          <van-tab title="留言" to='/recruit/chat'></van-tab>
        </van-tabs>
    </div>
    <div style='margin-bottom: 60px;background-color: #f4f4f4 '>
       <keep-alive><router-view :key="$route.fullPath" /></keep-alive>
        <!-- <router-view /> -->
    </div>
  </div>
</template>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript">
import Menu from "./Public/Menu.vue"
    export default{
        components:{
            Menu,
        },
        data(){
            return{
                show:false,
                title:'招聘信息',
                active:0,
                hide:1,
                name:'',
                list:[
                    {name:'找招聘信息管理',to:'/recruit/manage'},
                    {name:'学生简历管理',to:'/recruit/resume'},
                ]
            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)
            },
            show_menu(name){
                
                if(name==2){
                    this.show=true
                }else{
                    this.show=false
                }
            },
            changeShow(value){
                this.show=value;
            }
        }
    }
    /*window.onscroll = function () {
        // 获取窗口滚动的距离
        var scrolDis = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrolDis=='50'){
            
        }
    };*/
    
</script>