<template>
  <div style="height:100vh;background-color: white">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" />
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
    <div style='margin-bottom: 50px'>
      <div class='cont' @click='skip' v-for="(item,index) in list" :key='index'> 
        <van-image block style='display:block;margin:auto'
        width='350px' height='175px' radius='12px' fit="fill"
        :src="item.img"
        />
        <div class='message' >
          <van-image
          width='52px' height='52px' radius='26px' fit="fill"
          :src="item.ava"
          />
          <div class='info'>
            <p style='font-weight: bold;font-size: 18px;margin-top:0px'>{{item.name}}</p>
            <p style='margin-top:8px'>{{item.desc}}</p>

          </div>
          <p style='margin-top:0px;line-height:25px;color:gray;font-size: 14px'>{{item.time}}</p>
        </div>
         <van-divider
          :style="{borderColor: '#dbdbdb', padding: '0 16px' }"
          ></van-divider>
      </div> 
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        >到底了哦</van-divider>
    </div>
    
  </div>
</template>

<style type="text/css" scoped>
  .cont{
    margin-top:10px;
  }
 
  .van-divider{
    margin-top:5px;
    margin-bottom:25px;
  }
  .message{
    display:flex;
    align-items:flex-start;
    background-color: white;
    padding-left:15px;
    padding-right:15px;
    margin-top:10px;
  }
  .info>p{
    margin:0;
    width:100%;
    margin-left:20px;
    font-size:16px;
    overflow: hidden;

    /*文本不会换行*/
    white-space: nowrap;
    /*当文本溢出包含元素时，以省略号表示超出的文本*/
    text-overflow: ellipsis;
  }

  .info{
    width:200px;
    padding-right:10px;
  }
</style>

<script type="text/javascript">
  export default {
    name:'a_index',
    data() {
      return {
        list:[
          {'img':require('../../assets/activity/s1.png'),'ava':require('../../assets/goods/h1.jpeg'),'name':'社团招新','desc':'这里是社团活动介绍','time':'2020-10-21'},
          {'img':require('../../assets/activity/s2.png'),'ava':require('../../assets/goods/h4.jpeg'),'name':'社团招新','desc':'这里是社团活动介绍','time':'2020-11-02'},
          {'img':require('../../assets/activity/s3.png'),'ava':require('../../assets/goods/h5.jpeg'),'name':'社团招新','desc':'这里是社团活动介绍','time':'2020-12-22'},
        ],
        value: 0,
        value1: 0,
        option: [
        { text: '筛选', value: 0 },
        { text: '分类1', value: 1 },
        { text: '分类2', value: 2},
        { text: '分类3', value: 3 }
        ],
        option1: [
        { text: '排序', value: 0 },
        { text: '排序1', value: 1 },
        { text: '排序2', value: 2 },
        { text: '排序3', value: 3 }
        ],
      }
    },
    methods: {
      onConfirm() {
        this.$refs.item.toggle();
      },
      skip(){
        this.$router.push('/activity/5');
      }
    }
  };
</script>