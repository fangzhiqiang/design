<template>
  <div style='text-align:center'>
    <van-search
    v-model="value"
    shape="round"
    background="#4fc08d"
    placeholder="请输入搜索关键词"
    />
    <div id='cat'>
     <div v-for='(item,index) in img' :key='index'>
       <van-image
       width="2.5rem"
       height="2.5rem"
       fit="contain"
       :src="item.url"
       />
        <span>{{item.title}}</span>
     </div>
    </div>
    
    <div id='container'>
        <div id='con_left'>
            <div v-for="(item,index) in goods_list_l" :key="index" @click='get_detail(item.url)'>
                <van-image
                radius='18px 18px 0px 0px'
                fit="contain"
                :src="item.img_url"
                />
                <span>{{item.title}}</span>
                <div class='price'>
                    <div style='color:red'>{{item.price}}</div>
                    <div>{{item.brower}}</div>
                </div>
                <div class='user'>
                    <van-image
                    radius='50%' fit="fill" height='20px' width='20px' 
                    :src="item.ava_url"
                    />
                    <div style='padding-left:10px'>{{item.name}}</div>
                </div>
            </div>        
        </div>
        <div id='con_right'>
            <div v-for="(item,index) in goods_list_r" :key="index" @click='get_detail(item.url)'>
                <van-image
                radius='18px 18px 0px 0px'
                fit="contain"
                :src="item.img_url"
                />
                <span>{{item.title}}</span>
                <div class='price'>
                    <div style='color:red'>{{item.price}}</div>
                    <div>{{item.brower}}</div>
                </div>
                <div class='user'>
                    <van-image
                    radius='50%' fit="fill" height='20px' width='20px' 
                    :src="item.ava_url"
                    />
                    <div style='padding-left:10px'>{{item.name}}</div>
                </div>
            </div>
        </div>
        <div style="clear:both"></div>
    </div>
  </div>
</template>
<style type="text/css" scoped>
    .user{
        margin-top:10px;
        width:90%;
        height:20px;
        display:flex;
       
    }
    #cat{
        display: flex;
        background-color: white;
        margin:auto;
        width:85%;
        margin-top:20px;
        border-radius: 30px;
        padding:15px;
        flex-wrap: wrap;
        height:150px;
    }
    #container{
        width:100%;
        margin-bottom: 100px;
        margin-top:10px;
    }
    #cat>div{
        display:flex;
        flex-direction: column;
        flex:0 0 25%;
        align-items: center
    }
    #cat span{
        font-size: 13px;
        margin-top:5px;
    }
    #con_left{
        width:42%;
        margin-left:5%;
        display: flex;
        flex-direction: column;
        
        float:left;
    }
    #con_right{
        width:42%;
        display: flex;
        flex-direction: column;
        
        margin-left:52%;
    }
    
    #con_left>div,#con_right>div{
        align-items: center;
        border-radius: 18px;
        display:flex;
        flex-direction: column;
        background-color: white;
        flex:0 0 46%;
        margin-top:17px;
    }
    #con_left span:nth-of-type(1),#con_right span:nth-of-type(1){
        width:84%;
        margin-top:5px;
        display: block;
        word-break: break-all;
        text-align: left;
    }
    .price{
        display: flex;
        justify-content: space-between;
        margin-top:12px;
        font-size:16px;
        width:84%;
        align-items: center;
    }
    .price div:nth-of-type(1){
       color:red;
       margin-left:-5px;
    }
    .price div:nth-of-type(2){
        font-size:12px;
    }
    
</style>
<script type="text/javascript">
    export default{
        data(){
            return{
                img:[
                    {'url':require('../../assets/goods/phone.png'),title:'手机',to:'goods/cat'},
                    {'url':require('../../assets/goods/book.png'),title:'图书',to:'goods/cat'},
                    {'url':require('../../assets/goods/tele.png'),title:'电子',to:'goods/cat'},
                    {'url':require('../../assets/goods/cloth.png'),title:'服饰',to:'goods/cat'},
                    {'url':require('../../assets/goods/fashion.png'),title:'潮品',to:'goods/cat'},
                    {'url':require('../../assets/goods/buti.png'),title:'美妆',to:'goods/cat'},
                    {'url':require('../../assets/goods/food.png'),title:'食品',to:'goods/cat'},
                    {'url':require('../../assets/goods/more.png'),title:'更多',to:'goods/cat'},
                ],
                goods_list_l:[
                    {'img_url':require('../../assets/goods/test.jpeg'),'title':'ducati','price':'￥500.0','brower':'20人浏览','url':'/goods/1','ava_url':require('../../assets/goods/test.jpeg'),'name':'ducati'},
                    {'img_url':require('../../assets/goods/test.jpeg'),'title':'ducati','price':'￥500.0','brower':'20人浏览','url':'/goods/1','ava_url':require('../../assets/goods/test.jpeg'),'name':'ducati'},
                ],
                goods_list_r:[
                    {'img_url':require('../../assets/goods/test.jpeg'),'title':'ducati','price':'￥500.0','brower':'20人浏览','url':'/goods/1','ava_url':require('../../assets/goods/test.jpeg'),'name':'ducati'},
                    {'img_url':require('../../assets/goods/test.jpeg'),'title':'ducati','price':'￥500.0','brower':'20人浏览','url':'/goods/1','ava_url':require('../../assets/goods/test.jpeg'),'name':'ducati'},
                ],
            }
        },

        methods:{
            get_detail(url){
                this.$router.push(url)
            }
        }
    }
</script>