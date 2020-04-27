<template>
    <div>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        {{state}}
        </van-divider>
        <van-card style='margin-top:20px' centered
        num="1"
        price="2.00"
        desc="描述信息78787878787"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
        </van-card>
        <van-cell-group style='padding-left: 22px'>
          <van-field label="收货地址:" value="地址地址" readonly />
          <van-field label="姓名:" value="fang" readonly />
          <van-field label="电话:" value="13336153934" readonly />
          <van-field label="下单日期:" value="2020-04-20" readonly />
        </van-cell-group>
        <van-button round type="info" block style='margin:auto;margin-top:40px;width:70%' color='#6983aa' @click='onSubmit'>同意买家退款</van-button>
    </div>
</template>

<style>
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
</style>

<script type="text/javascript">
    
    import { Dialog } from 'vant';
    import { Toast } from 'vant';
    export default {
      name:'g_order_detail',
      data() {
        return {
          chosenAddressId: '1',
          show:false,
          state:'买家申请退款中',
          list: [
          {
              id: '1',
              name: '张三',
              tel: '13000000000',
              address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          },
          
          ],
         
      }
  },
  methods: {
    onSubmit(){
      Dialog.confirm({
        title: '同意退货',
        message: '同意退货吗？钱款将会返回买家账户中。'
      }).then(() => {
        this.state='商品已退款';
        Toast.success("操作成功")  
      })
    }
  }
}

</script>