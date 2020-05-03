<template>
<div>

<section class="aui-flexView">
    <section class="aui-scrollView">
        <div class="aui-take-head">
            <div class="aui-flex aui-flex-one">
                <div class="aui-take-user">
                    <img src="../../assets/goods/h6.jpeg" alt="">
                </div>
                <div class="aui-flex-box">
                    <h2>我的名字</h2>
                    <span>
                        <i class="icon icon-phone"></i>185****8888
                    </span>
                </div>
                <div class="aui-take-button">
                    <button @click.stop="skip('/my/info')">修改信息</button>
                </div>
            </div>
            <div class="aui-flex aui-flex-two">
                <div class="aui-flex-box">
                    <h3>积分充值现在8折起!</h3>
                </div>
                <div class="aui-go-button">
                    <button @click.stop="skip('/my/charge')">立即充值</button>
                </div>
            </div>

            <img src="../../assets/my/head.png" alt="">
        </div>

        <div class="aui-flex aui-flex-three">
            <div class="aui-flex-box aui-flex-box-info">
                <h4>余额 <em>￥3元</em></h4>
            </div>
            <div class="aui-flex-box">
                <h4>积分 <em>300</em>分</h4>
            </div>
        </div>

        <div class="aui-take-item">
            <div class="aui-flex" style="padding-bottom:0">
                <div class="aui-flex-box">
                    <h1>我的事务</h1>
                </div>
                
            </div>
            <div class="aui-palace">
                <router-link to='/goods/order' class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../../assets/my/o.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>订单</h2>
                    </div>
                </router-link>
                <router-link to='/help/get' class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img style='width:30px' src="../../assets/my/t.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>任务</h2>
                    </div>
                </router-link>
                <a href="javascript:;" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../../assets/my/l.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>奖品</h2>
                    </div>
                </a>
                <a class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../../assets/my/r.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>投递</h2>
                    </div>
                </a>
            </div>
        </div>

        <!-- <div class="aui-flex aui-flex-fore">
            <div class="aui-flex-box">
                <img src="../../assets/my/ad-001.png" alt="">
            </div>
        </div> -->

        <div style='padding-left:16px;padding-right: 16px'>
            <van-collapse v-model="activeName" accordion>
              <van-collapse-item  name="1">
                  <template #title>
                    <div style='font-weight: bold;font-size: 1.17em'>我的发布</div>
                  </template>
                  <van-cell title="二手商品信息"  to='/goods/manage'>
                      <span style='font-size:16px;font-weight: bold;'>></span>
                  </van-cell>
                  <van-divider />

                  <van-cell title="学生互助信息"   to='/help/manage'>
                      <span style='font-size:16px;font-weight: bold;'>></span>
                  </van-cell>
                  <van-divider />
                
                  <van-cell title="社团活动信息"   to='/activity/manage'>
                      <span style='font-size:16px;font-weight: bold;'>></span>
                  </van-cell>
                  <van-divider />

                   <van-cell title="招聘信息"  to='/recruit/manage' >
                      <span style='font-size:16px;font-weight: bold;'>></span>
                  </van-cell>
                  <van-divider />     
                </van-collapse-item>
            </van-collapse>

            <van-collapse v-model="activeName" accordion>
              <van-collapse-item  name="2">
                  <template #title>
                    <div style='font-weight: bold;font-size: 1.17em'>积分管理</div>
                  </template>
                  <van-cell title="积分充值"   to='/my/charge'>
                      <span style='font-size:16px;font-weight: bold;'>></span>
                  </van-cell>
                  <van-divider />

                  <van-cell title="积分兑换"  to='/my/exchange'>
                      <span style='font-size:16px;font-weight: bold;'>></span>
                  </van-cell>
                  <van-divider />
                
                  <van-cell title="积分抽奖"  to='/my/luck' >
                      <span style='font-size:16px;font-weight: bold;'>></span>
                  </van-cell>
                  <van-divider />

                  <van-divider />     
                </van-collapse-item>
            </van-collapse>

          <van-divider />
          <van-cell to='/my/info' style='font-size:16px;font-weight: bold;padding:10px 16px 10px 16px' title="个人信息" is-link />
          <van-divider />
          <van-cell to='/goods/chat' style='font-size:16px;font-weight: bold;padding:10px 16px 10px 16px' title="聊天信息" is-link />
          <van-divider />
         
        </div>
        

        <div class="aui-take-item">
            <div class="aui-flex">
                <div class="aui-flex-box">
                    <h1>常用功能</h1>
                </div>
                
            </div>
            <div class="aui-palace">
                <a href="javascript:;" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../../assets/my/re.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>浏览记录</h2>
                    </div>
                </a>
                <a href="javascript:;" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../../assets/my/ad.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>收货地址</h2>
                    </div>
                </a>
                
                <a href="javascript:;" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../../assets/my/rep.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>联系客服</h2>
                    </div>
                </a>
                
                
                <a href="javascript:;" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../../assets/my/ba.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>意见反馈</h2>
                    </div>
                </a>
                <a href="javascript:;" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../../assets/my/set.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>设置</h2>
                    </div>
                </a>
                
            </div>
        </div>
        <div style="height:50px;"></div>


    </section>
    
</section>
</div>
</template>

<style src='../../assets/my/style.css' scoped>

</style>
<script type="text/javascript">
    export default{
        name:'m_index',
        data(){
            return{
                activeName:1,
                title:'个人中心',
            }
        },
        methods:{
            onClickLeft(){
                //this.$router.push('/my/index')
                this.$router.go(-1)
            },
            skip(url){
                this.$router.push(url)
            }
        }
    }
</script>