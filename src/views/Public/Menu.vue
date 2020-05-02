<template>
    <div id='menu'>
        <van-popup :close-on-click-overlay='close' :overlay-style="overlay_style" v-model="show" position="top" >
            <van-cell-group>
                <van-cell  size='large' v-for='(item,index) in list' :key='index' :title="item.name" @click="skip(item.to)"   />
          </van-cell-group>
      </van-popup>
      
  </div>
</template>

<style type="text/css" scoped >
.van-popup{
    min-height:15%;top:89px;
}

#menu{
    position: fixed;
    top:89px;
}
.van-cell--large{
    padding:12px 35px 12px 30px;
}

</style>
<script type="text/javascript">
    
    export default{
        name:'p_menu',
        props:['list'],
        data(){
            return{
                show:true,
                close:false,
                overlay_style:{top:'89px'},
            }
        },
        watch: {
            show(newValue, oldValue) {
                this.$emit('changeShow',newValue)
                console.log(oldValue)
                console.log(this.show)
            }
        },
        methods:{
            skip(to){
                this.$router.push(to)
                this.show=false
            }
        }
    }
</script>