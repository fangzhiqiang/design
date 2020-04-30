<template>
  <div class="about">
    <van-swipe-cell v-if='show[0]'>
      <van-card
      num="1"
      price="4900.00"
      desc="用了6个月，9成新。"
      title="Huawei Mate30 pro"
      class="goods-card"
      :thumb="require('../../assets/goods/w1.png')"
      />
      <template #right>
        <van-button
        square to='/goods/modify'
        text="编辑"
        type="primary"
        class="delete-button"

        />
        <van-button @click="del(1)"
        square
        text="删除"
        type="danger"
        class="delete-button"
        />
      </template>
    </van-swipe-cell>

    <van-swipe-cell v-if='show[1]'>
      <van-card
      num="1"
      price="21.00"
      desc="9成新，没有笔记。"
      title="线性代数习题集"
      class="goods-card"
      :thumb="require('../../assets/goods/g5.png')"
      />
      <template #right>
        <van-button to='/goods/modify'
        square
        text="编辑"
        type="primary"
        class="delete-button"

        /> 
        <van-button  @click="del(2)"
        square
        text="删除"
        type="danger"
        class="delete-button"
        />
      </template>
    </van-swipe-cell>
    <van-swipe-cell v-if='show[2]'>
      <van-card
      num="1"
      price="1998.00"
      desc="拍照效果杠杠的。"
      title="佳能相机"
      class="goods-card"
      :thumb="require('../../assets/goods/g3.webp')"
      />
      <template #right>
        <van-button to='/goods/modify'
        square
        text="编辑"
        type="primary"
        class="delete-button"

        />
        <van-button  @click="del(3)"
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
.van-card__price ,.van-card__num{
  color:red;
}
</style>


<script>
  import { Dialog } from 'vant';
    export default{
      name:'g_manage',
        data(){
            return{
              show:[true,true,true]
            }
        },
        methods:{
          del(id){
             Dialog.confirm({
                title: '删除',
                message: '确认删除发布的信息吗？'
            }).then(() => {
                var i = id-1
                 this.show.splice(i,1,false)
            })    
          }
        },
    }
</script>
