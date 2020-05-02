<template>
    <div id='chat'>
        <van-swipe-cell>
      <div class='position' >
        <div class='title'>
            <p>PHP开发工程师</p>
            <p>10-15k</p>
        </div>
        <div>
            <van-tag size='large' v-for='(item,index) in tag_list' :key='index' :type="item.type">{{item.name}}</van-tag>
        </div>
        <div style='margin-top:10px;padding-bottom: 10px'>2020-05-03</div>
    </div>
  
    </van-swipe-cell>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">求职者昵称
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
.goods-card {
  margin-top:10px;
  background-color: @white;
}

.delete-button {
  height: 100%;
}
.title>p:nth-of-type(1){
    font-size:24px;
    font-weight: bold;
}
.title>p:nth-of-type(2){
    font-size:20px;
    color:red;
    font-weight: bold;
}
.position{
    background-color: white;
    padding:20px;
    padding-top:0px;
    margin-top:15px;
    padding-bottom:0px;
}
.boss>p:nth-of-type(2){
    flex:1;
    text-align: right;
}
.boss{
    display: flex;
    align-items: center;
    margin-top:-13px;
}
.boss>p:nth-of-type(1){
    font-size: 20px;
    font-weight: bold;
    margin-left:15px;
}
.title{
    line-height: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#tag{
    padding-left:20px;
    padding-right:20px;
}
.van-tag--large{
    margin-right:10px;
    margin-top:10px;
}
.van-slider{
    background-color: white;
    width:80%;
}
.custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
}
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
        name:'hchat_detail',
        methods:{
            add(){
                var data = {'right':this.info,'left':0,'time':0,img:require('../../assets/goods/test1.jpg')}
                this.chat_list.push(data)
                this.info=''
            }
        },
        data(){
            return{
                tag_list:[
                    {name:'ThinkPhp',type:'primary'},
                    {name:'Mysql',type:'success'},
                    {name:'Apache',type:'warning'},
                    {name:'Swoole',type:'danger'},
                ],
                info:'',
                chat_list:[
                {
                    'left':'这是左边内容',
                    'right':0,
                    'time':0,
                    'img':require('../../assets/goods/h1.jpeg')
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
                    'img':require('../../assets/goods/h2.jpeg')
                },
                {
                    'left':'这是右边内容',
                    'right':0,
                    'time':0,
                    'img':require('../../assets/goods/h1.jpeg')
                },
                {
                    'left':0,
                    'right':'这是右边内容',
                    'time':0,
                    'img':require('../../assets/goods/h2.jpeg')
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