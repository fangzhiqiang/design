<template>
  <div id='add'>
    <van-field placeholder='请输入任务名称' v-model="name" type="text" label="标题:" />
    <hr style='width:97%;opacity: 0.5'>
    <van-field placeholder='请输入任务悬赏积分' v-model="number" type="number" label="积分数:" />
    <hr style='width:97%;opacity: 0.5'>
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
    <van-cell value="上传任务描述图片" />
    <van-uploader style='margin-left:12px' v-model="fileList" multiple />
    <hr style='width:97%;opacity: 0.5'>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="任务类型" name="1">
          <van-checkbox-group v-model="result" direction="horizontal">
              <van-checkbox name="a">线上任务</van-checkbox>
              <van-checkbox name="b">线下任务</van-checkbox>
              <van-checkbox name="c">快递代取</van-checkbox>
              <van-checkbox name="d">商品代购</van-checkbox>
              <van-checkbox name="e">校内任务</van-checkbox>
             
          </van-checkbox-group>
      </van-collapse-item>
      
    </van-collapse>
    
    <hr style='width:97%;opacity: 0.5'>
    
    <van-button round type="info" block style='margin:auto;margin-top:30px;width:70%' color='#6983aa'>发布任务</van-button>
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
