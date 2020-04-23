<template>
    <div>

        <table id="mytable" cellspacing="0" summary="The technical specifications of the Apple 

        PowerMac G5 series"> 
        <caption> </caption> 
        <tr> 
            
            <th scope="col">姓名</th> 
            <th scope="col">电话</th> 
            <th scope="col">奖品</th> 
            <th scope="col">图片</th> 
        </tr> 
        <tr v-for="(item,index) in list" :key='index'> 
            
              <td class="row">{{item.name}}</td> 
              <td class="row">{{item.tel}}</td> 
              <td class="row">{{item.luck}}</td> 
              <td class="row"><van-image 
                width='40px' height='40px' radius='20px' fit="fill"
              :src="item.img"
              />
            </td> 
          </tr> 
          
      </table> 
  </div>
</template>


<script type="text/javascript">
  export default{
    data(){
      return{
        list:[
         {
            
            'name':'fang',
            'tel':'13336153934',
            'luck':'奖品名称',
            'img':require('../../assets/goods/test1.jpg')
          },
          {
            
            'name':'fang',
            'tel':'13336153934',
            'luck':'奖品名称',
            'img':require('../../assets/goods/test1.jpg')
          },
          {
            
            'name':'fang',
            'tel':'13336153934',
            'luck':'奖品名称',
            'img':require('../../assets/goods/test1.jpg')
          },
        ]
      }
    }
  }
</script>
<style type="text/css"> 
/* CSS Document */ 
a { 
    color: #c75f3e; 
} 

#mytable { 
    width: 100%; 
    padding: 10px; 
    margin: 0; 
} 

caption { 
    padding: 0 0 5px 0; 
    width: 100%; 
    font: italic 11px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif; 
    text-align: right; 
} 

th { 
    font: bold 12px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif; 
    color: #4f6b72; 
    border-right: 1px solid #C1DAD7; 
    border-bottom: 1px solid #C1DAD7; 
    border-top: 1px solid #C1DAD7; 
    letter-spacing: 2px; 
    text-transform: uppercase; 
    text-align: left; 
    padding: 6px 6px 6px 12px; 
    background: #CAE8EA  no-repeat; 
    text-align: center;
} 
/*power by www.winshell.cn*/ 
th.nobg { 
    border-top: 0; 
    border-left: 0; 
    border-right: 1px solid #C1DAD7; 
    background: none; 
} 

td { 
    text-align: center;
    vertical-align: middle;
    border-right: 1px solid #C1DAD7; 
    border-bottom: 1px solid #C1DAD7; 
    background: #fff; 
    font-size:12px; 
    padding: 6px 6px 6px 12px; 
    color: #4f6b72; 
} 
/*power by www.winshell.cn*/ 

td.alt { 
    background: #F5FAFA; 
    color: #797268; 
} 

th.spec { 
    border-left: 1px solid #C1DAD7; 
    border-top: 0; 
    background: #fff no-repeat; 
    font: bold 10px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif; 
} 

th.specalt { 
    border-left: 1px solid #C1DAD7; 
    border-top: 0; 
    background: #f5fafa no-repeat; 
    font: bold 10px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif; 
    color: #797268; 
} 

</style> 
