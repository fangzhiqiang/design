<template>
  <div >

    <div style=''>
        <van-nav-bar  @click-left="onClickLeft" style='background-color: #f4f4f4;'
        :title="title"
        left-text="返回"
        left-arrow
        />
        <van-tabs @click='show_menu' v-model="active" style='z-index:100'>
          <van-tab title="首页" to='/activity/index'></van-tab>
          <van-tab title="发布" to='/activity/add'></van-tab>
          <van-tab title='管理' ><Menu v-if='show' :list='list' @changeShow='changeShow'></Menu></van-tab>
      <van-tab title="留言" to='/activity/chat'></van-tab>
  </van-tabs>
</div>
<div style='margin-bottom: 60px;background-color: #f4f4f4 '>
    <!-- <keep-alive><router-view :key="$route.fullPath" /></keep-alive> -->
    <router-view />
</div>

</div>
</template>

<style scoped>

</style>
<script type="text/javascript">
    import Menu from "./Public/Menu.vue"
    export default{
        components:{
            Menu,
        },
        data(){
            return{
                title:'社团活动',
                active:0,
                hide:1,
               list:[
                {name:'活动管理',to:'/activity/manage'},
                {name:'抽奖结果',to:'/activity/res_luck'},
                {name:'活动报名结果',to:'/activity/res_sign'},
                ],
               show:true,
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
    
</script>