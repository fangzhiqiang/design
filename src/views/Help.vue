<template>
  <div >
    <div >
        <van-nav-bar  @click-left="onClickLeft" style='background-color: #f4f4f4;'
        :title="title"
        left-text="返回"
        left-arrow
        />
        <van-tabs v-model="active" style='z-index:100'>
          <van-tab title="首页" to='/help/index'></van-tab>
          <van-tab title="发布" to='/help/add'></van-tab>
          <van-tab title="管理" to='/help/manage'></van-tab>
          <van-tab title="我的任务" to='/help/get'></van-tab>
          <van-tab title="聊天" to='/help/chat'></van-tab>
        </van-tabs>
    </div>
    <div style='margin-bottom: 60px;background-color: #f4f4f4 '>
        <keep-alive><router-view /></keep-alive>
    </div>
  </div>
</template>

<script type="text/javascript">
   
    export default{
        data(){
            return{
                title:'互助任务',
                active:0,
                hide:1,
                name:'',
            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)
            },
            getPath(){
                var a = this.$route.path.split("/")
                if(a[2]=='index'){
                  this.active=0
              }
              if(a[2]=='add'||a[2]=='modify'){
                  this.active=1
              }
              if(a[2]=='manage'){
                  this.active=2
              }
              if(a[2]=='get'){
                  this.active=3
              }
              if(a[2]=='chat'){
                  this.active=4
              }
          }
        },
        watch:{
            '$router':'getPath'
        }
    }
    /*window.onscroll = function () {
        // 获取窗口滚动的距离
        var scrolDis = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrolDis=='50'){
            
        }
    };*/
    
</script>