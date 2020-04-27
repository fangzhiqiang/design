<template>
  <div style="height:100vh;background-color: white">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" />
      <van-dropdown-item title="筛选" ref="item">
        <van-switch-cell v-model="switch1" title="包邮" />
        <van-switch-cell v-model="switch2" title="团购" />
        <van-button block type="info" @click="onConfirm">确认</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div>
      <div class='cont' @click='skip'>
        <van-image block style='display:block;margin:auto'
        width='350px' height='175px' radius='12px' fit="fill"
        :src="require('../../assets/goods/test1.jpg')"
        />
        <div class='message' >
          <van-image
          width='52px' height='52px' radius='26px' fit="fill"
          :src="require('../../assets/goods/test1.jpg')"
          />
          <div class='info'>
            <p style='font-weight: bold;font-size: 18px;margin-top:0px'>我是昵称</p>
            <p>我是消息内容4545411</p>

          </div>
          <p style='line-height:25px;color:gray;font-size: 14px'>2019-10-05</p>
        </div>
         <van-divider
          :style="{borderColor: '#dbdbdb', padding: '0 16px' }"
          ></van-divider>
      </div> 
      <div class='cont' @click='skip'>
        <van-image block style='display:block;margin:auto'
        width='350px' height='175px' radius='12px' fit="fill"
        :src="require('../../assets/goods/test1.jpg')"
        />
        <div class='message' @click='skip'>
          <van-image
          width='52px' height='52px' radius='26px' fit="fill"
          :src="require('../../assets/goods/test1.jpg')"
          />
          <div class='info'>
            <p style='font-weight: bold;font-size: 18px;margin-top:0px'>我是昵称</p>
            <p>我是消息内容4545411</p>

          </div>
          <p style='line-height:25px;color:gray;font-size: 14px'>2019-10-05</p>
        </div>
         <van-divider
          :style="{borderColor: '#dbdbdb', padding: '0 16px' }"
          ></van-divider>
      </div> 
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
        value: 0,
        switch1: false,
        switch2: false,
        option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
        ]
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