<template>
    <div> 
        <div class='first'>
            <van-image
            width='38px' height='38px' radius='5px' fit="fill"
            :src="data.url"
            />
            <p>{{data.name}}</p>
        </div>
        <div style="margin-left:49px;font-size:18px">{{data.content}}</div>
        <div style="font-size: 14px;color:gray;margin-left:49px;padding-top:10px">{{data.time}}</div>
        <hr>
    </div>
</template>
<style type="text/css" scoped>
    hr{
        opacity: 0.5;
    }
    .first{
        display: flex;
        align-items: center;
        padding-top:10px;
    }
    .first p{
        padding-left:7px;
        font-weight: bold;
        font-size:18px;
    }
</style>
<script type="text/javascript">
    export default{
        name:'g_message',
        props:['data'],
        data(){
            return{

            }
        }
    }
</script>
