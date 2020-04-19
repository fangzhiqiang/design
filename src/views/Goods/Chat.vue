<template>
  <div class="about">
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">历史消息
    </van-divider>
    <div>
        <div class='message' @click='skip'>
            <van-image
            width='60px' height='60px' radius='5px' fit="fill"
            :src="require('../../assets/goods/test1.jpg')"
            />
            <div class='info'>
                <p style='font-weight: bold;font-size: 20px;margin-top:0px'>我是昵称</p>
                <p>我是消息内容454545454541111111111111111</p>
                <p style='color:gray;font-size: 12px'>2小时前</p>
            </div>
            <van-image 
            height='70px' width='70px' fit="fill"
            :src="require('../../assets/goods/test1.jpg')"
            />
        </div>
    </div>
  </div>
</template>
<style type="text/css" scoped>
    .message{
        display:flex;
        
        align-items: flex-start;
        background-color: white;
        padding:15px;
        margin-top:10px;
    }
    .info>p{
        margin:0;
        width:100%;
        margin-left:20px;
        margin-top:5px;
        font-size:18px;
        overflow: hidden;
        /*文本不会换行*/
        white-space: nowrap;
        /*当文本溢出包含元素时，以省略号表示超出的文本*/
        text-overflow: ellipsis;
    }
    .info{
        width:180px;
        padding-right:40px;
    }
</style>

<script type="text/javascript">
    export default{
        methods:{
            skip(){
                this.$router.push('/goods/chat_detail')
            }
        }
    }
</script>
