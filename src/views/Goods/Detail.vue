<template>
    <div id='container'>
        <div id='head'>
            <van-image
                width='50px' height='50px' radius='10px' fit="fill"
                :src="require('../../assets/goods/h4.jpeg')"
                />
            <div style='padding-left:20px'>
                <p>别问我在不在</p>
                <p style='color:gray;font-size: 14px'>发布于5天前</p>
            </div>   
        </div>
        <hr style='width:97%;opacity: 0.5'>
        <p style='margin-top:20px;margin-left:-4px;color:red;font-size:20px'>￥4000</p>
        <div id='content'>
            <h3>华为mate30pro 8+256 翡冷翠
全新未拆封，电子发票，可以验货7天全国联保，27号到手，个人原因一口价4000出了，最新配置，有任何质量问题无条件包退！之内随时退货诚意，要买的请留言联系我。</h3>
        </div>
        <div id='img'>
            <van-image width='100%'
                radius='20px 20px 0 0' fit="fill"
                :src="require('../../assets/goods/w.png')"
                />
            <van-image width='100%' v-for="(item,index) in img_list" :key='index'
                 fit="contain"
                :src="item"
                />
            <div id='img_bottom'>
                <van-image  v-for="(item,index) in img_bottom" :key='index'
                 fit="fill"
                :src="item"
                />
            </div>
        </div>

        <div id='rooter'>
            <p style='float:right'>28人想要·超赞5·浏览58754</p>
        </div>
        <div style='clear:both'></div>
        <div class='pass'></div>
        <div id='info'>
            <div>
                <p style='line-height: 15px;padding-top:15px;padding-bottom:15px;font-size: 20px'>别问我在不在</p>
                <p style='padding-top:10px;line-height: 28px'>入驻50天了,卖出了很多商品入驻50天了,卖出了很多商品入驻50天了,卖出了很多商品</p>
            </div>
            <van-image
                width="60px" height="60px"
                fit="fill"
                :src="require('../../assets/goods/h4.jpeg')"
                />
        </div>
        <div class='pass'></div>
        <div id='message'>
            <p style='padding-top: 10px;font-size: 19px;font-weight: bold;'>全部留言·52</p>
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
            <div @click='change(1)'>
                <img  v-if="like" width='37px' height='37px' src='../../assets/goods/like.png'>
                <img  v-else width='37px' height='37px' src='../../assets/goods/like1.png'>
                <div style='font-size: 13px;text-align: center;margin-top:-8px'>点赞</div>
            </div>
            <div @click='change(2)'>
                <img  style='margin-top:5px' v-if="collection" width='30px' height='30px' src='../../assets/goods/coll.png'>
                <img  style='margin-top:5px' v-else width='30px' height='30px' src='../../assets/goods/coll1.png'>
                <div style='font-size: 13px;text-align: center;margin-top:-6px'>收藏</div>
            </div>
            <div  @click='note' style='margin-left:20px'>
                <img  style='margin-top:9px' width='25px' height='25px' src='../../assets/goods/chat.png'>
                <div style='font-size: 13px;text-align: center;margin-top:-5px'>留言</div>
            </div>
            <div style="float:right;margin-right:40px;margin-top:5px">
                <van-button to='/goods/buy' style='font-size:18px;' color="linear-gradient(to right, #900c3f, #c70039)" size='normal' round type="info">购买</van-button>
                <van-button to='/goods/chat_detail' style='margin-left:10px;font-size:18px;' color="linear-gradient(to right, #900c3f, #c70039)" size='normal' round type="info">私聊</van-button>
            </div>
            
            
        </div>
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
        left:-15px;
        padding-left:30px;
    }
    #tag>div{
        float:left;
        margin-left:15px;
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
        margin-top:-10px;
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
    import message from './Message.vue'
    export default{
        name:'g_detail',
        components:{
            'message':message
        },
        data(){
            return{
                img_list:[
                    require('../../assets/goods/g2.jpeg'),  
                ],
                img_bottom:[
                    require('../../assets/goods/w.png'),
                    require('../../assets/goods/w1.png'),
                    require('../../assets/goods/w2.png'),
                    require('../../assets/goods/w3.png'),
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
                'flag':false
            }
        },
        methods:{
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
                var info = {'name':'Suzuki','url':require('../../assets/goods/h7.png'),'content':this.info,'time':'1小时前','answer':0};
                this.message.unshift(info)
                this.flag=false
            }
        },

    }
</script>