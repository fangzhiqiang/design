<template>
  <div class="about">
    <van-swipe-cell v-for='(item,index) in data_list' :key='index'  >
      <van-card  @click='skip' style='margin-top:20px' centered
    :desc="item.desc"
    >
    <template #tags>
      <div class='tag'>
        <van-tag plain type="danger">{{item.price}}</van-tag>
        <van-tag plain type="danger">{{item.state}}</van-tag>
      </div> 
    </template>

    <template #title>
      <div class='title'>
        <p>{{item.title}}</p>
        <p>{{item.date}}</p>
      </div> 
    </template>
    
  </van-card>
      <template #right>
        <van-button to='/help/modify'
        square
        text="编辑"
        type="primary"
        class="delete-button"

        />
        <van-button @click="del(item.id)"
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
  margin-top:0px;
  background-color: @white;
  margin-right:0px;
}
.van-swipe-cell{
  margin-top:-7px;
}
.van-card__desc{
  margin-top:-12px;
}
.delete-button {
  height: 100%;
}

.tag{
  display:flex;
  justify-content: space-between;
  margin-top:10px;

}
.title{
  display: flex;
  justify-content: space-between;
  font-size:17px;
  align-items: center;
}
.title>p:nth-of-type(1){
  font-weight: bold;
}
.title>p:nth-of-type(2){
  font-size:12px;
}
.about{
  letter-spacing: 1px;
}
</style>


<script>
  import { Dialog } from 'vant';
    export default{
      name:'h_manage',
        data(){
            return{
                data_list:[
                  {
                    id:0,
                    price:'8积分',
                    img:require('../../assets/goods/h4.jpeg'),
                    title:'代拿快递',
                    desc:'5号楼12架4层',
                    state:'已被完成',
                    date:'2020-10-21'
                  },
                  {
                    id:1,
                    price:'2积分',
                    img:require('../../assets/goods/h5.jpeg'),
                    title:'任务名称',
                    desc:'我是描述，任务介绍',
                    state:'已被领取',
                    date:'2020-05-01'
                  },
                  {
                    id:2,
                    price:'20积分',
                    img:require('../../assets/goods/h6.jpeg'),
                    title:'任务名称',
                    desc:'我是描述，任务简介',
                    state:'未领取',
                    date:'2020-04-11'
                  },
                  {
                    id:3,
                    price:'40积分',
                    img:require('../../assets/goods/h6.jpeg'),
                    title:'任务名称',
                    desc:'我是描述，任务简介',
                    state:'已完成等待确认',
                    date:'2020-04-11'
                  }
                ]
            }
        },
        methods:{
          del(id){
              Dialog.confirm({
                title: '删除',
                message: '确认删除发布的信息吗？'
            }).then(() => {
                this.data_list.splice(id,1)
            })  
                
          },
          skip(){
            this.$router.push('/help/order')
          }
        }
    }
</script>
