<template>
  <div class="about">
    <van-card @click='order_detail()' style='margin-top:20px' centered
    num="1"
    price="2.00"
    desc="描述信息78787878787"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
    <template #tags>
        <van-tag plain type="danger">已收货</van-tag>
    </template>
        <!-- <template #footer>
            <van-button size="small">退款</van-button>
            <van-button size="small">确认收货</van-button>
        </template> -->
    </van-card>
    <van-card  @click='order_detail()' style='margin-top:20px' centered
    num="1"
    price="2.00"
    desc="描述信息78787878787"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
    <template #tags>
        <van-tag plain type="danger">{{state}}</van-tag>
    </template>
    <template #footer>
        <van-button size="small" @click='confirm_data(1)'>退款</van-button>
        <van-button size="small" @click='confirm_data(2)'>确认收货</van-button>
    </template>
</van-card>

<van-card   @click='order_detail()' style='margin-top:20px' centered
num="1"
price="2.00"
desc="描述信息78787878787"
title="商品标题"
thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
<template #tags>
    <van-tag plain type="danger">{{state1}}</van-tag>
</template>
<template #footer>
    <van-button size="small" @click='confirm_data(3)'>确认退款</van-button>
</template>
</van-card>

</div>
</template>

<script type="text/javascript">
    import { Dialog } from 'vant';
    import { Toast } from 'vant';
    export default{
        data(){
            return{
                state:'已付款',
                state1:'买家请求退款中'
            }
        },
        methods:{
            order_detail(){
                this.$router.push('/goods/order_detail')
            },
            confirm_data(id){
                if(id==1){
                    Dialog.confirm({
                      title: '退款',
                      message: '确认退款吗？'
                    }).then(() => {
                        this.state='退款中';
                      Toast.success("操作成功,等待卖家同意退款")  
                    })
                }else if(id==2){
                    Dialog.confirm({
                      title: '收货',
                      message: '确认收货后，系统将自动转移钱款到卖家帐户中。'
                    }).then(() => {
                        this.state='已收货';
                        Toast.success("操作成功")  
                    })
                }else if(id==3){
                    Dialog.confirm({
                      title: '同意退货',
                      message: '同意退货吗？钱款将会返回买家账户中。'
                    }).then(() => {
                        this.state1='已同意退款';
                        Toast.success("操作成功")  
                    })
                }
            }
        },
}
</script>
