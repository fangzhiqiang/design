<template>
  <div class="about">
    <van-swipe-cell v-for='(item,index) in data_list' :key='index'>
      <van-card  style='margin-top:20px' centered

    :desc="item.desc"
   
    :thumb="item.img"
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
    <template #thumb>
      <van-image style='margin-top:17px'
      width='60px' height='60px' radius='30px' fit="fill"
      :src="require('../../assets/goods/test1.jpg')"
      />
    </template>

    
  </van-card>
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
    export default{
      name:'h_manage',
        data(){
            return{
                data_list:[
                  {
                    price:'8积分',
                    img:'https://img.yzcdn.cn/vant/cat.jpeg',
                    title:'任务名称',
                    desc:'我是描述',
                    state:'已被完成',
                    date:'2020-10-21'
                  },
                  {
                    price:'2积分',
                    img:'https://img.yzcdn.cn/vant/cat.jpeg',
                    title:'任务名称',
                    desc:'我是描述',
                    state:'已被领取',
                    date:'2020-05-01'
                  }
                ]
            }
        }
    }
</script>
