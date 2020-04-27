<template>
    <div>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value" :options="option" />
          <van-dropdown-item title="筛选" ref="item">
            <van-switch-cell v-model="switch1" title="包邮" />
            <van-switch-cell v-model="switch2" title="团购" />
            <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>
    </van-dropdown-menu>
    <div> 
        <div class='message' @click='skip'>
            <van-image
            width='50px' height='50px' radius='25px' fit="fill"
            :src="require('../../assets/goods/test1.jpg')"
            />
            <div class='info'>
                <div style='display:flex;justify-content: space-between;font-weight: bold;font-size: 18px;margin-top:-15px'>
                  <p>姓名</p>
                  <p>php开发</p>
                </div>
                
                <p style='color:gray;font-size: 12px;margin-top:-10px'>2019-10-05</p>
            </div>
            <p style='margin-left:30px;color:red;font-size:20px'><van-button type="primary" size='small'>查看简历</van-button></p>
        </div>
    </div>

</div>
</template>

<style type="text/css" scoped>
    .message{
        display:flex;
        align-items:center;
        background-color: white;
        padding:15px;
        margin-top:10px;
    }
    .info>p,.info>div{
        margin:0;
        width:100%;
        margin-left:20px;
        margin-top:3px;
        font-size:16px;
        overflow: hidden;
        /*文本不会换行*/
        white-space: nowrap;
        /*当文本溢出包含元素时，以省略号表示超出的文本*/
        text-overflow: ellipsis;
    }
    .info{
        width:180px;
        padding-right:10px;
    }
</style>

<script type="text/javascript">
    export default {
      name:'r_resume',
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
        this.$router.push('/recruit/resume_detail');
    }
}
};
</script>