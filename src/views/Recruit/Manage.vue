<template>
  <div class="about">
    <van-swipe-cell v-for='(pos,index) in pos_list' :key='index'>
      <div class='position' >
        <div class='title'>
            <p>{{pos.title}}</p>
            <p>{{pos.salary}}</p>
        </div>
        <div>
            <van-tag size='large' v-for='(item,index) in pos.tag_list' :key='index' :type="item.type">{{item.name}}</van-tag>
        </div>
        <div style='margin-top:10px;padding-bottom: 10px'>{{pos.time}}</div>
    </div>
      <template #right>
        <van-button
        square
        text="编辑"
        type="primary"
        class="delete-button"

        />
        <van-button
        square
        text="删除"
        type="danger"
        class="delete-button"
        />
      </template>
    </van-swipe-cell>
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
</style>


<script>
    export default{
        name:'r_manage',
        data(){
            return{
                pos_list:[
                    {title:'Java工程师',salary:'10-15k',company:'阿里巴巴',people:'200-9999',status:'已上市',ava:require('../../assets/goods/h4.jpeg'),nickname:'马云',address:'杭州','time':'2020-05-03',
                    tag_list:[
                        {name:'经验不限',type:'primary'},
                        {name:'学历不限',type:'success'},
                        {name:'后端',type:'warning'},
                        {name:'J2EE',type:'danger'},
                    ]},
                    {title:'Web前端',salary:'6-10k',company:'Tencent',people:'200-9999',status:'已上市',ava:require('../../assets/goods/h3.jpeg'),nickname:'马化腾',address:'深圳','time':'2020-02-02',
                    tag_list:[
                        {name:'Vue',type:'primary'},
                        {name:'React',type:'success'},
                        {name:'技术栈',type:'warning'},
                        {name:'Jquery',type:'danger'},
                        
                    ]},
                    {title:'PHP开发',salary:'3-7k',company:'百度',people:'200-9999',status:'已上市',ava:require('../../assets/goods/h9.jpeg'),nickname:'李彦宏',address:'杭州',time:'2019-12-06',
                    tag_list:[
                        {name:'ThinkPhp',type:'primary'},
                        {name:'Mysql',type:'success'},
                        {name:'Apache',type:'warning'},
                        {name:'Swoole',type:'danger'},
                        
                    ]},
                ],
            }
        }
    }
</script>
