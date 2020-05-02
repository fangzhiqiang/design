<template>
	<div style='height:80vh;background-color: white'>
		<link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

		<p style='margin-top:20px;text-align: center;font-size: 19px;font-weight: bold;'>积分充值</p>
    <div class="content">
        <div class="panal">
            <div class="row">
                <div class="col-xs-5 greenbr" @click="get(0)" style="background-color:#0a0;color:#fff">
                    <strong>10积分</strong>
                    <br> 售价：10.00元
                    
                </div>
                <div class="col-xs-offset-2 col-xs-5 greenbr" @click="get(1)">
                    <strong>30积分</strong>
                    <br> 售价：28.00元
                </div>
            </div>
            <div class="row">
                <div class="col-xs-5 greenbr" @click="get(2)">
                    <strong>30积分</strong>
                    <br> 售价：28.00元
                </div>
                <div class="col-xs-offset-2 col-xs-5 greenbr" @click="get(3)">
                    <strong>50积分</strong>
                    <br> 售价：43.00元
                </div>
            </div>
            <div class="row">
                <div class="col-xs-5 greenbr" @click="get(4)">
                    <strong>100积分</strong>
                    <br> 售价：89.00元
                </div>
                <div class="col-xs-offset-2 col-xs-5 greenbr" @click="get(5)">
                    <strong>200积分</strong>
                    <br> 售价：150.00元
                </div>
            </div>
        </div>
        <hr>
        <form class="form panal" method="get">
            <div class="form-group row box">
                <label for="uid" class="col-xs-3 control-label">积分</label>
                <div class="col-xs-9">
                    <input type="number" class="form-control" id="uid" name="uid" placeholder="输入要充值积分数目">
                </div>
            </div>

            <div class="form-group row box">
                <label for="count" class="col-xs-3 control-label">金额</label>
                <div class="col-xs-9">
                    <input type="text" class="form-control" id="count" name="count" readonly value="10">
                </div>
            </div>

            <div style='margin-top:50px' class="form-group row box">
                <div class="col-xs-12 fit">
                    <button @click='skip()' class="btn btn-success fit">充值</button>
                </div>
            </div>
        </form>
    </div>

	</div>
</template>


<style scoped>
    .header {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        height: 60px;
        background-color: #000;
        color: #fff;
    }

    .content {
        padding-top: 10px;
    }

    .greenbg {
        width: 100%;
        background-color: #0f0;
    }

    .greenbr {
        padding:10px 5px;
        text-align: center;
        border: solid;
        border-radius: 8px;
        border-color: #0a0;
        color: #0a0;
    }

    .submit {
        height: 45px;
    }

    .fit {
        width: 100%;
    }

    .row {
        margin-top: 10px;
    }

    .panal {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 30px;
    }

    .box {
				
        margin-bottom: 20x;
    }

 
</style>
<script>
	export default{
		methods:{
			skip(){
				this.$router.push('/goods/pay')
			},
			getByClass(parent, cls) {
        if (parent.getElementsByClassName) {
            return parent.getElementsByClassName(cls);
        } else {
            var res = [];
            var reg = new RegExp(' ' + cls + ' ', 'i')
            var ele = parent.getElementsByTagName('*');
            for (var i = 0; i < ele.length; i++) {
                if (reg.test(' ' + ele[i].className + ' ')) {
                    res.push(ele[i]);
                }
            }
            return res;
        }
      },
      get(index) {
        var choose = this.getByClass(document, 'greenbr');
        for (let i = 0; i < choose.length; i++) {            
            choose[i].style.backgroundColor = "#fff";
            choose[i].style.color = "#0a0";
        }
        choose[index].style.backgroundColor = "#0a0";
        choose[index].style.color = "#fff";

        var count = document.getElementById("count");
        var money=0
        if(index == 1) { money = 10; } else
        if(index == 2) { money = 28; } else
        if(index == 3) { money = 43; } else
        if(index == 4) { money = 89; } else
        if(index == 5) { money = 150; } else
        { money = 10; }
        count.value = money;
      }  
		}
	}
      
</script>


    

