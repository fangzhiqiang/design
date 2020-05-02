<template>
  <div >
    <van-nav-bar  @click-left="onClickLeft" style='background-color: #f4f4f4;'
    :title="title"
    left-text="返回"
    left-arrow
    />
    <div style='margin-bottom: 60px;background-color: #f4f4f4 '>
        <keep-alive><router-view /></keep-alive>
    </div>
  </div>
</template>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript">
import Menu from "./Public/Menu.vue"
    export default{
        components:{
            Menu,
        },
        data(){
            return{
                show:false,
                title:'个人中心',
                active:0,
                hide:1,
                name:'',
                list:[
                    {name:'找招聘信息管理',to:'/recruit/manage'},
                    {name:'学生简历管理',to:'/recruit/resume'},
                ]
            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)
            },
            show_menu(name){
                
                if(name==2){
                    this.show=true
                }else{
                    this.show=false
                }
            },
            changeShow(value){
                this.show=value;
            }
        }
    }  
</script>