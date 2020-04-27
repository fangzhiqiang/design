
<template>
  <div id="app">
    <!-- <router-view/> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
   <van-tabbar v-model="active" style='background-color: #f4f4f4'>
    <van-tabbar-item icon="shop-o" to='/goods/index'>闲置</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to='/help/index'>互助</van-tabbar-item>
    <van-tabbar-item icon="fire-o" to='/activity/index'>活动</van-tabbar-item>
    <van-tabbar-item icon="newspaper-o" to='/recruit/index'>招聘</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to='/my/index'>管理</van-tabbar-item>
    
   </van-tabbar>
   
</div>
</template>

<style>
body{
  margin:0;
  padding:0;
  background-color: #f4f4f4
}


</style>
<script type="text/javascript">
  export default{
    name:'app',
    data(){
      return{
        active:0
      }
    },

    watch: {
      '$route':'getPath'
    },
    methods: {
      getPath(){
        var a = this.$route.path.split("/");
        if(a[1]=='goods'){
          this.active=0
        }
        if(a[1]=='help'){
          this.active=1
        }
        if(a[1]=='activity'){
          this.active=2
        }
        if(a[1]=='recruit'){
          this.active=3
        }
        if(a[1]=='my'){
          this.active=4
        }
      }
    }
  }
</script>
