<template>
  <div class="about">
    <van-swipe-cell>
      <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      class="goods-card"
      thumb="https://img.yzcdn.cn/vant/cat.jpeg"
      />
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
</style>


<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
