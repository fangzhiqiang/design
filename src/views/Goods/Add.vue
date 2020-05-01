<template>
  <div id='add'>
    <van-field
    v-model="message"
    rows="2"
    autosize
    label="描述信息"
    type="textarea"
    maxlength="500"
    placeholder="请输入简介"
    show-word-limit
    />
    <hr style='width:97%;opacity: 0.5'>
    <van-uploader v-model="fileList" multiple />
    <hr style='width:97%;opacity: 0.5'>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="选择分类" name="1">
          <van-checkbox-group v-model="result" direction="horizontal">
              <van-checkbox name="a">手机</van-checkbox>
              <van-checkbox name="b">数码</van-checkbox>
              <van-checkbox name="d">服饰</van-checkbox>
              <van-checkbox name="e">零食</van-checkbox>
              <van-checkbox name="h">书籍</van-checkbox>
              <van-checkbox name="f">生活用品</van-checkbox>
              <van-checkbox name="c">学习用品</van-checkbox>
          </van-checkbox-group>
      </van-collapse-item>
      
    </van-collapse>
    <hr style='width:97%;opacity: 0.5'>
    <van-field placeholder='请输入产品名称' v-model="name" type="text" label="名称:" />
    <hr style='width:97%;opacity: 0.5'>
    <van-field placeholder='请输入产品型号' v-model="name" type="text" label="型号:" />
    <hr style='width:97%;opacity: 0.5'>
    <van-field placeholder='请输入销售价格' v-model="number" type="number" label="价格:" />
    <hr style='width:97%;opacity: 0.5'>
    <van-button round type="info" block style='margin:auto;margin-top:30px;width:70%' color='#6983aa'>发布商品</van-button>
</div>
</template>
<style type="text/css" scoped>
#add{
    background-color: white;
    padding:10px;

}
.van-checkbox{
    margin-top:10px;
}
#add>div{
    margin-top:4px;
}
</style>
<script type="text/javascript">
export default{
 
    data(){
        return{
            activeNames: ['1'],
            message:'',
            result: [],
            number:'',
            name:'',
            fileList: [
                { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
            ]
        }
    }
}
</script>
