<template>
  <div class="about">
    <van-card  style='margin-top:20px' centered

    desc="描述信息78787878787"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
    <template #tags>
      <div class='tag'>
        <van-tag plain type="danger">20 积分</van-tag>
        <van-tag plain type="danger">{{state}}</van-tag>
      </div> 
    </template>

    <template #title>
      <div class='title'>
        <p>我是标题</p>
        <p></p>
      </div> 
    </template>
    <template #thumb>
      <van-image style='margin-top:17px'
      width='60px' height='60px' radius='30px' fit="fill"
      :src="require('../../assets/goods/test1.jpg')"
      />
    </template>

    <template #footer>
      <van-button size="small" @click='confirm_data(1)'>退还任务</van-button>
      <van-button size="small" @click='confirm_data(2)'>确认完成</van-button>
    </template>
  </van-card>

  <van-card  style='margin-top:20px' centered

    desc="描述信息78787878787"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
    <template #tags>
      <div class='tag'>
        <van-tag plain type="danger">20 积分</van-tag>
        <van-tag plain type="danger">{{state1}}</van-tag>
      </div> 
    </template>

    <template #title>
      <div class='title'>
        <p>我是标题</p>
        <p>我发布的</p>
      </div> 
    </template>
    <template #thumb>
      <van-image style='margin-top:17px'
      width='60px' height='60px' radius='30px' fit="fill"
      :src="require('../../assets/goods/test1.jpg')"
      />
    </template>

    <template #footer>
      <van-button size="small" @click='confirm_data(3)'>同意完成</van-button>
      
    </template>
  </van-card>
</div>
</template>

<style type="text/css" scoped>
.tag{
  display:flex;
  justify-content: space-between;
  margin-top:10px;
}
.title{
  display: flex;
  justify-content: space-between;
}
.title>p:nth-of-type(1){
  font-weight: bold;
}
.title>p:nth-of-type(2){
  color:red;
}
.about{
  letter-spacing: 1px;
}

</style>


<script type="text/javascript">
  import { Dialog } from 'vant';
  import { Toast } from 'vant';
  export default{
    data(){
      return{
        state:'未完成',
        state1:'等待接受者完成'
      }
    },
    methods:{
      order_detail(){
        this.$router.push('/goods/order_detail')
      },
      confirm_data(id){
        if(id==1){
          Dialog.confirm({
            title: '退还任务',
            message: '确认退掉任务吗？'
          }).then(() => {
            this.state='任务已经退还'
            Toast.success("操作成功")  
          })
        }else if(id==2){
          Dialog.confirm({
            title: '完成任务',
            message: '完成任务后，需等待发布者再次确认，才能获得任务积分。'
          }).then(() => {
            this.state='等待发布者确认';
            Toast.success("操作成功")  
          })
        }else if(id==3){
          Dialog.confirm({
            title: '任务完成',
            message: '同意后将会从你的账户扣取任务积分。'
          }).then(() => {
            this.state1='已完成';
            Toast.success("操作成功")  
          })
        }
      }
    },
  }
</script>
