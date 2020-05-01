<template>
    <div id='container'>
        
        <div id='head'>
            <van-image
            width='50px' height='50px' radius='10px' fit="fill"
            :src="require('../../assets/goods/h9.jpeg')"
            />
            <div style='padding-left:20px;'>
                <p>Suzuki</p>
                <p style='color:gray;font-size: 14px'>发布于2020-02-02</p>
            </div>   
        </div>
        <h3 style='text-align: center;margin-top:0'>十佳歌手演唱会</h3>
        <hr style='width:97%;opacity: 0.5'>
        
        <div id='content'>
            <h3>这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</h3>
        </div>
        <van-cell-group style='font-weight: bold;'>
          <van-field style='padding-left:0' label="活动地点:" value="学生活动中心" readonly />
          
          <van-field style='padding-left:0' label="活动时间:" value="2020-06-30 19:00:00" readonly />
          
        </van-cell-group>
        <div id='img'>
            <van-image
            radius='20px 20px 0 0' fit="contain"
            :src="require('../../assets/activity/s4.png')"
            />
            <van-image v-for="(item,index) in img_list" :key='index'
            fit="contain"
            :src="item"
            />
            
        </div>

        <div id='rooter'>
            <p style='float:right'>超赞5145·浏览8754</p>
        </div>
        <div style='clear:both'></div>
        
        <div class='pass'></div>
        <div id='message'>
            <p style='padding-top: 10px;font-size: 19px;font-weight: bold;'>全部留言·5</p>
        </div>
        <div class='chat' v-for="(item,index) in message" :key="index">
            <message :data="item" ></message>
            <div v-if="item.answer">
                <message v-for="(ans,index1) in item.answer" :key='index1' :data="ans" class='answer'></message>
            </div>
            
        </div>
        <div id='input' v-if='flag'>
            <van-field
            v-model="info"
            center
            clearable
            placeholder="请输入留言信息"
            >
            <template #button>
                <van-button @click='send' size="small" type="primary">发送</van-button>
            </template>
        </van-field>
    </div>
    
    <div id='tag'>
       <div style="margin-left:-8px">
        <van-button @click='luck' style='font-size:15px;' color="linear-gradient(to right, #ff5722, #dd2c00)" size='small' round type="info">活动抽奖</van-button>
        </div>
        <div style="margin-left:50px">
            <van-button @click='sign' style='font-size:15px;' color="linear-gradient(to right, #ff5722, #dd2c00)" size='small' round type="info">活动报名</van-button>
        </div>
        <div  @click='note' style='margin-left:80px'>
            <img  style='margin-top:9px' width='25px' height='25px' src='../../assets/goods/chat.png'>
            <div style='font-size: 13px;text-align: center;margin-top:-5px'>留言</div>
        </div>
    </div>
<van-popup v-model="show" position="bottom" :style="{ height: '35%'}">
    <van-cell-group style='margin-top:20px'>
        <van-field v-model="value" label='姓名' placeholder="请输入姓名" />
        <van-field
        v-model="sms"
        center
        clearable
        label="手机号"
        placeholder="请输入手机号"
        >
            <template #button>
                <van-button size="small" type="primary">发送验证码</van-button>
            </template>
        </van-field>
        <van-field  label='验证码' placeholder="请输入验证码" />
</van-cell-group>
<van-button round type="info" block style='margin:auto;width:80%' color='#6983aa' @click='onSubmit'>确认报名</van-button>
</van-popup>
</div>
</template>

<style type="text/css" scoped>
  
    #input{
       width: 86%;
       background-color: gray;
       position: fixed;
       z-index:1000;
       bottom:80px;
       border:solid gray 1px;
       left:28px;
    }
    #tag{
        height:55px;
        width:100%;
        background-color: white;
        position: fixed;
        z-index:10;
        bottom: 0;
        left:0px;
        padding-left:30px;
        display: flex;
        align-items: center;
    }
    #tag>div{
        float:left;
        margin-left:10px;
    }
    .answer{
        margin-left:49px;
    }
    .pass{
        background-color: #f4f4f4;
        height:20px;
        margin-left:-15px;
        margin-right:-15px
    }
    #info{
        display: flex;
        align-items: center;
    }
    #info>div:nth-of-type(1){
        flex:0 0 70%;
        padding-right:20px;
        padding-bottom: 20px
    }
    #img_bottom{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    #img_bottom>div{
        flex:0 0 49%;
        border:1px solid white;
    }
    #img_bottom div:nth-of-type(3){
        margin-top:2px;
    }
    #img_bottom div:nth-of-type(4){
        margin-top:2px;
    }
    #container{
        padding:15px;
        padding-top:20px;
        background-color: white;
        padding-bottom:50px;
    }
    #head{
        display:flex;
        align-items: center;
        padding-bottom: 10px
    }
    p{
        margin:5px;
    }
    #content{
        margin-top:15px;
        margin-bottom: 20px;
    }
    #content h3{
        line-height: 30px;
        text-indent: 40px
    }
    #rooter p{
        padding:7px;
        color:gray;
        font-size: 18px;

    }
</style>
<script type="text/javascript">
    import message from '../Goods/Message.vue'
    import {Toast} from 'vant'
    export default{
        name:'a_act_detail',
        components:{
            'message':message
        },
        data(){
            return{
                img_list:[
                    require('../../assets/activity/s5.png'),
                ],
                
                message:[
                    {'name':'kawasaki','url':require('../../assets/goods/h1.jpeg'),'content':'我是内容我的留言','time':'1小时前','answer':0},
                    {'name':'ducati','url':require('../../assets/goods/h2.jpeg'),'content':'我是内容我的留言','time':'1小时前','answer':[
                            {
                            'name':'Coisini','url':require('../../assets/goods/h3.jpeg'),'content':'回复@楼主:这是我的回复','time':'5小时前',
                            },
                            {
                            'name':'哇咔咔','url':require('../../assets/goods/h4.jpeg'),'content':'回复@某个人:这是我的回复','time':'5小时前',
                            }
                        ]
                    },
                    {'name':'Pumpkin','url':require('../../assets/goods/h5.jpeg'),'content':'我是内容我的留言','time':'1小时前','answer':0},
                ],
                'like':true,
                'collection':true,
                'info':'',
                'flag':false,
                'show':false,
            }
        },
        methods:{
            onSubmit(){
                this.show=false
                Toast('报名成功')
            },
            change(id){
                if(id==1){
                    this.like=!this.like
                }else{
                    this.collection=!this.collection
                }
            },
            note(){
                this.flag=!this.flag
            },
            send(){
                var info = {'name':'新增留言','url':require('../../assets/goods/test1.jpg'),'content':this.info,'time':'1小时前','answer':0};
                this.message.unshift(info)
                this.flag=false
            },
            sign(){
                this.show=true
            },
            luck(){
                this.$router.push('/activity/luck')
            }
        },
    }
    
</script>