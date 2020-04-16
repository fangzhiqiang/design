
<template>
  <div id="app">
    <router-view/>
    <!-- <keep-alive>
      <router-view  :key="$route.fullPath" />
    </keep-alive> -->
   <van-tabbar v-model="active" style='background-color: #f4f4f4'>
    <van-tabbar-item icon="shop-o">闲置</van-tabbar-item>
    <van-tabbar-item icon="friends-o">互助</van-tabbar-item>
    <van-tabbar-item icon="fire-o">活动</van-tabbar-item>
    <van-tabbar-item icon="newspaper-o">招聘</van-tabbar-item>
    <van-tabbar-item icon="setting-o">管理</van-tabbar-item>
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
    data(){
      return{
        active:0
      }
    }
  }
</script>
