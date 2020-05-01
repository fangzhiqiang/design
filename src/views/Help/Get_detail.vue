<template>
    <div>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        任务信息
        </van-divider>
        
        <van-cell-group style='padding-left: 22px'>
          <van-field label="任务名称:" value="快递代取" readonly />
          
          <van-field autosize
          label="任务描述"
          type="textarea"
          value="在弗雷德广场带拿一个快递，不重。位置是12架3层501。姓名张三。送到32号楼502寝室。" 
          readonly
          show-word-limit
          />
          <van-field label="任务积分:" value="20分" readonly />
          <van-field label="任务状态:" value="已被接取者完成，等待您确认。" readonly />
          <van-field label="发布日期:" value="2020-04-20 16:20:10" readonly />
        </van-cell-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        发布者信息
        </van-divider>

        <div  class='message' >
            <van-image
            width='50px' height='50px' radius='25px' fit="fill"
            :src="require('../../assets/goods/g3.webp')"
            />
            <div class='info'>
                <p style='font-weight: bold;font-size: 18px;margin-top:0px'>Suzuki</p>
                <p>个人签名,个人签名</p>
                
            </div>
            <p style='margin-left:30px;color:red;font-size:20px'><van-button size='small' plain type="primary">联系</van-button></p>
        </div>

        <van-cell-group style='padding-left: 22px'>
          <van-field label="接取日期:" value="2020-04-20 16:20:10" readonly />
          
        </van-cell-group>
        <div id='btn'>
          <van-button plain size='normal' type="primary">确认完成</van-button>
          <van-button plain type="primary">退还任务</van-button>
        </div>
        
    </div>
</template>

<style>
    #btn{
      margin-top:10px;
      background-color: white;
      padding:5px 70px;
      display:flex;
      justify-content: space-between;
    }
    .wrapper{
        margin-top:100px;
        
    }
    .wrapper>div{
        width:90%;
        margin:auto;
        margin-top:20px;
    }
    
    .van-address-list__bottom{
        margin-bottom:80px;
    }
    .message{
        display:flex;
        align-items:center;
        background-color: white;
        padding:15px;
        margin-top:10px;
        padding-left:29px;
    }
    .info>p{
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
        width:200px;
        padding-right:10px;
    }
</style>

<script type="text/javascript">
    
    import { Dialog } from 'vant';
    import { Toast } from 'vant';
    export default {
 
      data() {
        return {
          chosenAddressId: '1',
          show:false,
          state:'买家申请退款中',         
      }
  },
  methods: {
    onSubmit(){
      Dialog.confirm({
        title: '确认完成',
        message: '确认后将会扣去积分'
      }).then(() => {
        Toast.success("操作成功")  
      })
    }
  }
}

</script>