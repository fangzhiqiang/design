<template>
    <div id='chat'>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">聊天对象
        </van-divider>
        <div v-for='(item,index) in chat_list' :key='index'>
            <div class='left' v-if='item.left'>
                <div class="chatin"><!-- 客服 -->
                    <img :src="item.img">
                    <span>{{item.left}}</span>
                </div>
            </div>
            <div class='time' v-if='item.time'>
                <van-divider dashed>{{item.time}}</van-divider>
            </div>
            <div class='right' v-if='item.right'>
                <div class="chatout"><!-- 询问 -->
                    <img :src="item.img">
                    <span>{{item.right}}</span>
                </div>
            </div>
        </div>

        <div id='send'>
            <van-field style='background-color: #f8e1f4;padding-left:40px;left:0px;position:fixed;bottom: 0;z-index:100000'
            size='large'
            center
            clearable
            placeholder="请输入消息" v-model='info'
            >
            <template #button>
                <van-button @click='add' size="small" type="primary">发送</van-button>
            </template>
        </van-field>
    </div>
</div>
</template>
<style type="text/css" scoped>
#chat{
    background-color: white;
    padding: 15px;
    height:100vh;
}

.chatout,.chatin{margin:10px 0;}
.chatout{text-align:right}
.chatout img{float:right;width:40px;height:40px;border-radius:50%;margin: 0 0 0 10px;}
.chatout span{display: inline-block;position:relative;max-width: calc(100% - 90px);min-height: 40px;line-height:40px;font-size: 13px;word-break: break-all;border-radius: 4px;background-color: #ff0000;color:#fff;padding-left:10px;padding-right:10px;text-align: center}
.chatout span:before{content: " ";position: absolute;top: 9px;left: 100%;border: 6px solid transparent;border-left-color: #ff0000;}
.chatin img{float:left;width:40px;height:40px;border-radius:50%;margin: 0 10px 0 0;}
.chatin span{display: inline-block;position:relative;padding-left:10px;padding-right:10px;max-width: calc(100% - 90px);min-height: 40px;line-height:40px;font-size: 13px;word-break: break-all;border-radius: 4px;text-align: left;background-color: #8ec6c5;}
.chatin span:before{content: " ";position: absolute;top: 9px;right: 100%;border: 6px solid transparent;border-right-color: #fafafa;
}
.right,.left,.time{
    margin-top:10px;
}
</style>

<script type="text/javascript">
    export default{
        methods:{
            add(){
                var data = {'right':this.info,'left':0,'time':0,img:require('../../assets/goods/test1.jpg')}
                this.chat_list.push(data)
                this.info=''
            }
        },
        data(){
            return{
                info:'',
                chat_list:[
                {
                    'left':'这是左边内容',
                    'right':0,
                    'time':0,
                    'img':require('../../assets/goods/test1.jpg')
                },
                {
                    'left':0,
                    'right':0,
                    'time':'这是时间',
                    'img':require('../../assets/goods/test1.jpg')
                },
                {
                    'left':0,
                    'right':'这是右边内容',
                    'time':0,
                    'img':require('../../assets/goods/test1.jpg')
                },
                {
                    'left':0,
                    'right':'这是右边内容',
                    'time':0,
                    'img':require('../../assets/goods/test1.jpg')
                },
                {
                    'left':0,
                    'right':'这是右边内容',
                    'time':0,
                    'img':require('../../assets/goods/test1.jpg')
                },
                {
                    'left':'这是左边内容',
                    'right':0,
                    'time':0,
                    'img':require('../../assets/goods/test1.jpg')
                },
                ]
            }
        }
    }
</script>