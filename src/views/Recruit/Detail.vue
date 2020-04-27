<template>
<div>  
<section class="aui-flexView">
    
    <section class="aui-scrollView">
        <div class="aui-flex aui-flex-bottom">
            <div class="aui-flex-box">
                <h1>web前端开发工程师</h1>
            </div>
            <div class="aui-right-text">
                <p>20k-50k</p>
            </div>
        </div>
        <div class="aui-flex">
            <div class="aui-flex-box">
                <span>
                    <i class="icon icon-ad"></i>北京·小营
                </span>
                <span>
                    <i class="icon icon-yew"></i>3-5年
                </span>
                <span>
                    <i class="icon icon-xul"></i>本科
                </span>
            </div>
        </div>

        <div class="aui-flex aui-color-back">
            <div class="aui-item-info">
                <span>
                    <i><img src="../../assets/recruit/time.png" alt=""></i>
                    <i>急聘</i>
                </span>
            </div>
            <div class="aui-flex-box">
                <span>该职位为急聘职位，你可以点击下方一键投递直接发送简历 </span>
            </div>
        </div>


        <div class="aui-flex b-line">
            <div class="aui-user-img">
                <img src="../../assets/recruit/user.png" alt="">
                <span><img src="../../assets/recruit/icon-vip.png" alt=""></span>
            </div>
            <div class="aui-flex-box">
                <h2>李嘉桦 <em>刚刚活跃</em></h2>
                <h3>完美世界  ·  HR </h3>
            </div>
            <div class="aui-arrow"></div>
        </div>


        <div class="aui-flex b-line">
            <div class="aui-flex-box">
                <h4>职位详情</h4>
                <h5>完美世界控股集团是全球领先的文化娱乐产业集团。长期以来，完美世界控股集团旗下产品遍布美、欧、亚等全球100多个国家和地区；在北京、香港、上海、重庆、成都、珠海等地设有分支机构，以及美国、荷兰、法国、韩国、日本等地区设有20多个海外分支机构。</h5>
                <p>工作职责:</p>
                <p>1. 参与产品需求讨论和产品设计，参与或者负责产品的开发工作；</p>
                <p>2. 负责具体的组件、代码编写、代码review及相关文档编写；</p>
                <p>3. 解决各类技术疑难问题，形成良好的研发氛围，提升团队整体技术水平；</p>
                <p>岗位要求:</p>
                <p>1. 两年及以上前端开发经验；</p>
                <p>2. 理解Web标准并熟练运用HTML/CSS/JavaScript构建高性能web应用；</p>
                <p>3. 熟悉vue、react，熟悉并熟练使用es6语法；</p>
                <p>4. 了解主流前端构建工具，并能根据项目实际情况定制构建工具；</p>
                <p>5. 对Web性能、安全相关有一定的了解；</p>
                <p>6. 有创新精神并能积极学习业界新技术，顺畅的沟通合作能力；</p>
                <p></p>
                <p></p>
            </div>
        </div>

        <div class="aui-flex b-line">
            <div class="aui-flex-box">
                <h4>技能要求</h4>
                <span>
                    <em>css</em>
                    <em>js/es6</em>
                    <em>web语言</em>
                </span>
            </div>
        </div>


        <div class="aui-flex b-line">
            <div class="aui-flex-box">
                <h4>团队介绍</h4>
                <span>
                    <em>互联网</em>
                    <em>偏平化管理</em>
                    <em>假日游</em>
                    <em>福利好</em>
                </span>
            </div>
        </div>


        <div class="aui-flex b-line">
            <div class="aui-user-img">
                <img src="../../assets/recruit/logo.png" alt="">
            </div>
            <div class="aui-flex-box">
                <h2>完美世界(北京)软件发展有限公司</h2>
                <h3>已上市  ·  1000-9999人  ·   游戏 </h3>
            </div>
            <div class="aui-arrow"></div>
        </div>

        <div class="aui-ad">
            <img src="../../assets/recruit/map.png" width="100%" alt="">
        </div>
        <div class="aui-flex">
            <div class="aui-flex-box">
                <h2 class="aui-info-tag"> <i class="icon icon-tis"></i> 温馨提示</h2>
                <p class="aui-info-text"> 改Boss承诺名下所有的职位不像你收费，如有不是 请举报。</p>
            </div>
        </div>
        <div class="divHeight"></div>

        
        
    </section>
    <footer class="aui-footer-button aui-footer-flex aui-footer-fixed">
        <div class="aui-footer-wrap">
            <span>一键投递</span>
        </div>

        <div @click='comunicate' class="aui-footer-group aui-footer-flex1">
            <div class="aui-footer-flex">
                <div class="aui-btn aui-btn-gray">
                    <h2>立即沟通</h2>
                </div>
            </div>
        </div>
    </footer>
</section>

</div>
</template>

<style type="text/css" scoped src='../../assets/recruit/style.css'>
</style>

<script type="text/javascript">
export default{
    name:'r_detail',
    data(){
        return{

        }
    },
    methods:{
        comunicate(){
            this.$router.push('/recruit/comunicate')
        }
    }
}
</script>