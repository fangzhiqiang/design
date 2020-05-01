<template>
  <div id='add'>
    <van-field value='街舞社招新'  type="text" label="名称:" />
    <hr style='width:97%;opacity: 0.5'>
    <van-field value='学生活动中心舞池'  type="text" label="地点:" />
    <hr style='width:97%;opacity: 0.5'>
    <van-field value='2020-03-20 19:30:00' type="number" label="时间:" />
    <hr style='width:97%;opacity: 0.5'>
    
    <van-field
    
    rows="2"
    autosize
    label="描述信息"
    type="textarea"
    maxlength="500"
    value="社团活动招新的简介信息，社团活动招新的简介信息，社团活动招新的简介信息。"
      show-word-limit
    />
    <hr style='width:97%;opacity: 0.5'>
    <div style="font-size:14px;color:#323233;padding:10px 16px">上传活动海报</div>
    <van-uploader style='padding-left:10px' v-model="fileList" multiple />
    <hr style='width:97%;opacity: 0.5'>

    <van-cell center title="是否设置活动抽奖">
      <template #right-icon>
        <van-switch v-model="checked" size="24" />
      </template>
    </van-cell>
    <hr style='width:97%;opacity: 0.5'>
    
    <van-collapse v-if='checked' v-model="activeNames">
      <van-collapse-item title="设置奖品信息" name="1">
        <van-cell-group v-for='(item,index) in luck_list' :key='index' class='luck'>
          <van-field input-align='center' style='width:40%;border:solid gray 1px;padding-top:2px;margin-bottom:10px;padding-bottom: 2px' v-model="item.name" placeholder="奖品名称" />
          <van-field input-align='center' style='margin-bottom:10px;text-align:center;width:40%;border:solid gray 1px;padding-top:2px;padding-bottom: 2px' v-model="item.num" placeholder="奖品数量" />
        </van-cell-group>
        <van-image  @click='add' style='margin-left:50px'
          width='45px' height='45px'  fit="fill"
          :src="require('../../assets/activity/add.png')"
          /> 
        <van-image @click='reduce' style='margin-left:140px'
        width='45px' height='45px'  fit="fill"
        :src="require('../../assets/activity/reduce.png')"
        /> 
        <hr style='width:97%;opacity: 0.5'>
      </van-collapse-item>   
    </van-collapse>


<van-cell center title="是否开启活动报名">
      <template #right-icon>
        <van-switch v-model="checked_sign" size="24" />
      </template>
    </van-cell>
    <hr style='width:97%;opacity: 0.5'>

    
    <van-button round type="info" block style='margin:auto;margin-top:30px;width:70%' color='#6983aa'>确认修改</van-button>
  </div>
</template>
<style type="text/css" scoped>
.luck{
  display: flex;
  justify-content: space-between;
}
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
    name:'a_add',
    data(){
      return{
        checked: true,
        checked_sign: true,
        isShow:false,
        data:'',
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
        final_date:'',
        activeNames: ['1'],
        message:'',
        result: [],
        number:'',
        name:'',
        fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        ],
        luck_list:[
          {'name':'手机','num':'1'},
          {'name':'平板','num':'1'},
          {'name':'耳机','num':'2'},
          {'name':'充电宝','num':'3'},
        ]
      }
    },
    methods:{
      show(){
        this.isShow=true
      },
      hidden(){
        this.isShow=false
        this.final_date = this.reverse(this.currentDate)
      },
      reverse(da){
        var d = new Date(da);  
         var youWant=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
        return  youWant;
      },
      add(){
        this.luck_list.push({'name':'','num':''})
      },
      reduce(){
        this.luck_list.shift()
      }

    }
  }


  
</script>
