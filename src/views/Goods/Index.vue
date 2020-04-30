<template>
    <div style='text-align:center'>
        <van-search
        
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        />
        <div id='cat'>
            <div v-for='(item,index) in img' :key='index' @click="show=true">
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
                        radius='50%' fit="fill" height='30px' width='30px'
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
                        radius='50%' fit="fill" height='30px' width='30px'
                        :src="item.ava_url"
                        />
                        <div style='padding-left:10px'>{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
        </div>
        <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        >到底了哦</van-divider>
        <van-overlay style='z-index:300' :show="show" >
            <van-tree-select @click-item="show=false" style='' height='100vh'
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
            />
        </van-overlay>
    </div>
</template>

<style type="text/css" scoped>
.van-overlay{
    z-index:400;
}
.user{
    margin-top:10px;
    width:90%;
    height:20px;
    display:flex;
    align-items: center;
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
    margin-bottom: 30px;
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
    margin-top:20px;
    padding-bottom: 10px;
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
    name:'g_index',
    data(){
        return{
            items:[
                {  
                    text: '手机数码',
                    badge: 3, 
                    dot: true,
                    children: [
                        {text: '耳机',id: 1,},
                        {text: '华为',id: 4,},
                        {text: '苹果',id: 5,},
                        {text: '数据线',id: 2,},
                        {text: '有线鼠标',id: 6,},
                        {text: '移动电源',id: 7,},
                    ],
                },
                {  
                    text: '美妆',
                    badge: 3, 
                    dot: true,
                    children: [
                        {text: '乳霜',id: 1,},
                        {text: '眼霜',id: 4,},
                        {text: '防嗮',id: 5,},
                        {text: '护手霜',id: 2,},
                        {text: '面膜',id: 6,},
                        {text: '香奈儿',id: 7,},
                    ],
                },
                {  
                    text: '服饰',
                    badge: 3, 
                    dot: true,
                    children: [
                        {text: '乳霜',id: 1,},
                        {text: '眼霜',id: 4,},
                        {text: '防嗮',id: 5,},
                        {text: '护手霜',id: 2,},
                        {text: '面膜',id: 6,},
                        {text: '香奈儿',id: 7,},
                    ],
                },
                {  
                    text: '零食',
                    badge: 3, 
                    dot: true,
                    children: [
                        {text: '乳霜',id: 1,},
                        {text: '眼霜',id: 4,},
                        {text: '防嗮',id: 5,},
                        {text: '护手霜',id: 2,},
                        {text: '面膜',id: 6,},
                        {text: '香奈儿',id: 7,},
                    ],
                },
            ],
            activeId: 1,
            activeIndex: 0,
            show:false,
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
                {'img_url':require('../../assets/goods/g3.webp'),'title':'佳能相机','price':'￥2500.0','brower':'20人浏览','url':'/goods/1','ava_url':require('../../assets/goods/h1.jpeg'),'name':'世间星火'},
                {'img_url':require('../../assets/goods/g2.jpeg'),'title':'华为mate30','price':'￥500.0','brower':'200人浏览','url':'/goods/1','ava_url':require('../../assets/goods/h2.jpeg'),'name':'Pumpkin'},
                {'img_url':require('../../assets/goods/g5.png'),'title':'线性代数习题集','price':'￥20.0','brower':'200人浏览','url':'/goods/1','ava_url':require('../../assets/goods/h3.jpeg'),'name':'哇咔咔'},
                {'img_url':require('../../assets/goods/g1.jpeg'),'title':'华为mate30 pro','price':'￥6799.0','brower':'147人浏览','url':'/goods/1','ava_url':require('../../assets/goods/h4.jpeg'),'name':'Coisini '},
            ],
            goods_list_r:[
                {'img_url':require('../../assets/goods/g1.jpeg'),'title':'华为mate30 pro','price':'￥6799.0','brower':'147人浏览','url':'/goods/1','ava_url':require('../../assets/goods/h5.jpeg'),'name':'别问我在不在'},
                {'img_url':require('../../assets/goods/g4.png'),'title':'高等数学习题集','price':'￥16.0','brower':'783人浏览','url':'/goods/1','ava_url':require('../../assets/goods/h6.jpeg'),'name':'433'},
                {'img_url':require('../../assets/goods/g3.webp'),'title':'佳能相机','price':'￥2500.0','brower':'20人浏览','url':'/goods/1','ava_url':require('../../assets/goods/h7.png'),'name':'搬砖小土妞'},
                {'img_url':require('../../assets/goods/g6.png'),'title':'帆布鞋','price':'￥500.0','brower':'200人浏览','url':'/goods/1','ava_url':require('../../assets/goods/h8.jpeg'),'name':'ducati'},
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