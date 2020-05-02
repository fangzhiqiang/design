<template>
  <div id='add'>
    <van-field value='Kawasaki' type="text" label="昵称:" />
    <hr style='width:97%;opacity: 0.5'>
    <van-field value='张三' type="text" label="姓名:" />
    <hr style='width:97%;opacity: 0.5'>
   
    <van-field  value='13336153934' type="text" label="联系方式:" />
    <hr style='width:97%;opacity: 0.5'>
    <van-field  value='生活区21号楼103' type="text" label="收货地址:" />
    <hr style='width:97%;opacity: 0.5'>
    <van-field
    value='这是个性签名签名，这是个性签名签名这是个性签名签名。'
    rows="2"
    autosize
    label="个性签名"
    type="textarea"
    maxlength="500"
    
    show-word-limit
    />
    <hr style='width:97%;opacity: 0.5'>
    <van-field value='' readonly type="text" label="选择头像" />
    <van-uploader style='padding-left:16px' v-model="fileList" multiple />
    <hr style='width:97%;opacity: 0.5'>
    
    
    
    <van-button round type="info" block style='margin:auto;margin-top:30px;width:70%' color='#6983aa'>确认修改</van-button>
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
                { url: require('../../assets/goods/h6.jpeg') },
            ]
        }
    }
}
</script>
