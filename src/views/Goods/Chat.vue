<template>
  <div class="about">
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">历史消息
    </van-divider>
    <div v-for='(item,index) in list' :key='index'>
        <div class='message' @click='skip'>
            <van-image
            width='60px' height='60px' block radius='30px' fit="contain"
            :src="item.ava"
            />
            <div class='info'>
                <p style='font-weight: bold;font-size: 18px;margin-top:0px'>{{item.name}}</p>
                <p>{{item.content}}</p>
                
            </div>
            <p style='color:gray;font-size: 15px;align-self: flex-start;'>{{item.time}}</p>
        </div>
    </div>
  </div>
</template>
<style type="text/css" scoped>
    .message{
        display:flex;
        
        align-items: center;
        background-color: white;
        padding:15px;
        margin-top:10px;
    }
    .info>p{
        padding:0;
        margin:0;
        width:100%;
        margin-left:20px;
        margin-top:2px;
        font-size:18px;
        overflow: hidden;
        /*文本不会换行*/
        white-space: nowrap;
        /*当文本溢出包含元素时，以省略号表示超出的文本*/
        text-overflow: ellipsis;
    }
    .info{
        width:200px;
        padding-right:40px;
    }
</style>

<script type="text/javascript">
    export default{
        data(){
            return{
                list:[
                    {
                        ava:require('../../assets/goods/h5.jpeg'),
                        name:'Coisini',
                        content:'你好手机价格能在商讨一下吗？',
                        time:'12:40',
                    },
                    {
                        ava:require('../../assets/goods/h3.jpeg'),
                        name:'kawasaki',
                        content:'在吗？',
                        time:'17:50',
                    },
                    {
                        ava:require('../../assets/goods/h9.jpeg'),
                        name:'哇咔咔',
                        content:'东西用了多久？',
                        time:'19:01',
                    }
                ]
            }
        },
        name:'g_chat',
        methods:{
            skip(){
                this.$router.push('/goods/chat_detail')
            }
        }
    }
</script>
