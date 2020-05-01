<template>
  <div class="about">
    <van-swipe-cell  v-for='(item,index) in data_list' :key='index'>
      <van-card  style='margin-top:20px' centered
      :desc="item.desc"
      
      >
      <template #title>
          <div class='title'>
            <p>{{item.title}}</p>
            <p>{{item.date}}</p>
        </div> 
    </template>

    <template #tags>
      <div class='tag'>
       <van-tag plain type="danger" @click='skip("/activity/res_luck")'>抽奖结果</van-tag>
        <van-tag plain type="danger" @click='skip("/activity/res_sign")'>报名结果</van-tag>
      </div> 
    </template>
    <template #thumb>
      <van-image style='margin-top:17px'
      width='60px' height='60px' fit="fill"
      :src="item.img"
      />
  </template>


</van-card>
<template #right>
    <van-button
    to='/activity/modify'
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
  .van-card__desc{
    font-size: 14px;
    margin-left:-8px;
  }
  .goods-card {
    margin-top:0px;
    background-color: @white;
    margin-right:0px;
  }
  .van-swipe-cell{
    margin-top:-7px;
  }

  .delete-button {
    height: 100%;
  }

  .tag{
    display:flex;
    justify-content: flex-end;
    margin-top:10px;
  }
  .tag>div{
    margin-left:10px;
    margin-right:10px;
  }
  .van-tag--plain{
    margin-left:10px;
    font-size:12px;
  }
  .title{
    display: flex;
    justify-content: space-between;
    font-size:17px;
    align-items: center;
   
    margin-left:-7px;
  }
  .title>p:nth-of-type(1){
    font-weight: bold;
  }
  .title>p:nth-of-type(2){
    font-size:14px;
  }
  .about{
    letter-spacing: 1px;
  }
</style>

<script>
    export default{
      name:'a_manage',
        data(){
            return{
                data_list:[
                {
                  img:require('../../assets/activity/s1.png'),
                  title:'校园十佳歌手',
                  desc:'活动简介，活动描述',
                  date:'2020-10-21'
                },
                {
                  img:require('../../assets/activity/s5.png'),
                  title:'台球社招新',
                  desc:'活动简介，活动描述',    
                  date:'2020-05-14'
                },
                {
                  img:require('../../assets/activity/s4.png'),
                  title:'街舞社招新',
                  desc:'活动简介，活动描述',    
                  date:'2020-03-01'
                }
                ]
            }
        },
        methods:{
            skip(v){
                this.$router.push(v)
            }
        }
    }
</script>
