<template>
    <div>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value" :options="option" />
          <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
    <div> 
        <div v-for='(item,index) in list' :key='index' class='message' @click='skip'>
            <van-image
            width='50px' height='50px' radius='25px' fit="fill"
            :src="item.ava"
            />
            <div class='info'>
                <p style='font-weight: bold;font-size: 18px;margin-top:0px'>{{item.name}}</p>
                <p>{{item.desc}}</p>
                <p style='color:gray;font-size: 12px'>{{item.time}}</p>
            </div>
            <p style='margin-left:30px;color:red;font-size:20px'>+{{item.integral}}</p>
        </div>
    </div>

</div>
</template>

<style type="text/css" scoped>
    .message{
        display:flex;
        align-items:center;
        background-color: white;
        padding:15px;
        margin-top:10px;
    }
    .info>p{
        margin:0;
        width:100%;
        margin-left:20px;
        margin-top:3px;
        font-size:16px;
        overflow: hidden;
        /*文本不会换行*/
        white-space: nowrap;
        /*当文本溢出包含元素时，以省略号表示超出的文本*/
        text-overflow: ellipsis;
    }
    .info{
        width:200px;
        padding-right:10px;
    }
</style>

<script type="text/javascript">
    export default {
      name:'h_index',
      data() {
        return {
          value: 0,
          option: [
            { text: '筛选', value: 0 },
            { text: '线上任务', value: 1 },
            { text: '线下任务', value: 2 },
            { text: '快递代取', value: 3 },
            { text: '商品代购', value: 4 },
          ],
          value1: 0,
          option1: [
            { text: '排序', value: 0 },
            { text: '最新发布', value: 1 },
            { text: '积分最多', value: 2 },
            { text: '热度最高', value: 3 },
          ],
          list:[
            {'name':'kawasaki','ava':require('../../assets/goods/h1.jpeg'),'desc':'5号楼代取一个快递','time':'2分钟前','integral':20},
            {'name':'Pumpkin','ava':require('../../assets/goods/h5.jpeg'),'desc':'求2013年高等数学期末试卷','time':'1小时前','integral':10},
            {'name':'啦啦啦','ava':require('../../assets/goods/h6.jpeg'),'desc':'帮带一份奶茶到32号楼','time':'3小时前','integral':5},
          ]
      }
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    skip(){
        this.$router.push('/help/5');
    }
}
};
</script>