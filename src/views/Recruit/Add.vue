<template>
  <div id='add'>
    <van-field placeholder='请输入招聘标题' v-model="name" type="text" label="标题:" />
    <hr style='width:97%;opacity: 0.5'>

    <van-field placeholder='请输入薪资区间' v-model="number" type="number" label="薪资:" />
    <hr style='width:97%;opacity: 0.5'>

    <van-field placeholder='请输入工作经验区间' v-model="name" type="text" label="工作经验:" />
    <hr style='width:97%;opacity: 0.5'>

    <van-field placeholder='请选择学历限制' v-model="name" type="text" label="工作经验:" />
    <hr style='width:97%;opacity: 0.5'>

    <van-field placeholder='请用逗号分隔给个技能标签' v-model="name" type="text" label="技能标签:" />
    <hr style='width:97%;opacity: 0.5'>

    

    <van-field placeholder='请输入公司名称' v-model="name" type="text" label="公司:" />
    <hr style='width:97%;opacity: 0.5'>

    <van-field placeholder='请输入公司地点' v-model="name" type="text" label="地点:" />
    <hr style='width:97%;opacity: 0.5'>


    
    <van-field
    v-model="message"
    rows="2"
    autosize
    label="岗位详情"
    type="textarea"
    maxlength="500"
    placeholder="请输入简介"
    show-word-limit
    />
    <hr style='width:97%;opacity: 0.5'>

    <!-- <van-collapse  v-model="activeNames">
      <van-collapse-item title="设置技能要求" name="1">
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
    </van-collapse> -->

    <div style="font-size:14px;color:#323233;padding:10px 16px">上传招聘海报</div>
    <van-uploader style='padding-left:10px' v-model="fileList" multiple />
    <hr style='width:97%;opacity: 0.5'>

    <van-button round type="info" block style='margin:auto;margin-top:30px;width:70%' color='#6983aa'>发布招聘信息</van-button>
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
    name:'r_add',
    data(){
      return{
        checked: false,
        checked_sign: false,
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
          {'name':'','num':''},
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
