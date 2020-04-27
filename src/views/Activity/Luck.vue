<template>

  <div style='height: 100vh;background-color: white;padding-top:10px'>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <van-panel  title="某某活动抽奖" desc="描述信息" :status="status">
      <div v-if='result' style="padding-left: 15px">我的奖品： {{result}}</div>
    </van-panel>

    <div style='position:absolute;top:380px;left:50%'>
      <nut-luckdraw
      class="drawTable"
      ref="luckDrawPrize"
      :luck-width="luckWidth"
      :luck-height="luckheight"
      :prize-list="prizeList"
      :turns-number="turnsNumber"
      :turns-time="turnsTime"
      :prize-index="prizeIndex"
      :style-opt="styleOpt"
      @end-turns="endTurns"
      >
      <template slot="item" slot-scope="scope">
        <div class="drawTable-name">{{ scope.item.prizeName }}</div>
        <div class="drawTable-img">
          <img :src="scope.item.prizeImg">
        </div>
      </template>
    </nut-luckdraw>
    <div @click="startTurns" class="pointer" :style="pointerStyle"></div>
  </div>
  <div v-if='result' style="color:red;padding-left: 15px;margin-top:380px">请尽快联系活动承办人领取奖品</div>
 
</div>
</template>

<style type="text/css" scoped>
.van-divider{
  margin:0px;

}
</style>

<script type="text/javascript">
  import { Dialog } from 'vant';
  
  export default {
    name:'a_luck',
    data() {
      return {
        result:0,
        status:'未参与',
        // 转盘大小
        luckWidth: '310px',
        luckheight: '310px',
        // 转盘指针图片样式
        pointerStyle: {
          width: '80px',
          height: '80px',
          backgroundImage: 'url("https://img11.360buyimg.com/imagetools/jfs/t1/89512/11/15244/137408/5e6f15edEf57fa3ff/cb57747119b3bf89.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        },
        // 奖品列表
        prizeList: [
        {
          id: 'xiaomi',
          prizeName: '小米手机',
          prizeImg: 'https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png',
        },
        {
          id: 'blue',
          prizeName: '蓝牙耳机',
          prizeImg: 'https://img13.360buyimg.com/imagetools/jfs/t1/91864/11/15108/139003/5e6f146dE1c7b511d/1ddc5aa6e502060a.jpg',
        },
        {
          id: 'apple',
          prizeName: 'apple watch',
          prizeImg: 'https://img11.360buyimg.com/imagetools/jfs/t1/105385/19/15140/111093/5e6f1506E48bd0dfb/829a98a8cdb4c27f.png',
        },
        {
          id: 'fruit',
          prizeName: '迪士尼苹果',
          prizeImg: 'https://img11.360buyimg.com/imagetools/jfs/t1/108308/11/8890/237603/5e6f157eE489cccf1/26e0437cfd93b9c8.png',
        },
        {
          id: 'fish',
          prizeName: '海鲜套餐',
          prizeImg: 'https://img14.360buyimg.com/imagetools/jfs/t1/90507/38/15165/448364/5e6f15b4E5df0c718/4bd4c3d375eec312.png',
        },
        {
          id: 'thanks',
          prizeName: '谢谢参与',
          prizeImg: 'https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png',
        }
        ],
        turnsNumber: 5, // 转动圈数
        turnsTime: 3,// 转动时间：S
        styleOpt: {
          prizeBgColors: ['rgb(255, 231, 149)','rgb(255, 247, 223)','rgb(255, 231, 149)','rgb(255, 247, 223)','rgb(255, 231, 149)','rgb(255, 247, 223)'],
          borderColor: '#ff9800',
        },
        prizeIndex: -1, // 中奖奖品的index
        lock: false,// 防止多次连续点击抽奖
        num: 5,// 抽奖次数,根据需求定义
      }
    },
    methods: {
      startTurns() {
        if (!this.canBeRotated()) {
          return false;
        }
        this.lock = true;
        // 此为模拟随机数字，这里可以接受后台中奖信息
        const index = Math.floor(Math.random() * this.prizeList.length);
        // 成功后抽奖次数减1
        this.num--;
        // 中奖奖品的index
        this.prizeIndex = index;
        // 调用组件的方法，使转盘转动并停留在中奖奖品的那个扇形区域
        this.$refs.luckDrawPrize.rotate(index);
      },
      endTurns() {

        Dialog.alert({
          title: '抽奖结果',
          message: "恭喜中奖！！！"+this.prizeList[this.prizeIndex].prizeName,
        }).then(() => {
  // on close
        });
        this.lock = false;
        this.status='已参与';
        this.result=this.prizeList[this.prizeIndex].prizeName
      },
      canBeRotated() {
        if (this.num <= 0) {
          this.$dialog({
            content: `已经没有次数了,继续加油赚积分吧！`,
            noCloseBtn: false,
            noOkBtn: true,
            cancelBtnTxt: "我知道了"
          });
          return false;
        }
        if (this.lock) {
          return false;
        }
        return true;
      },
    }
  }
</script>
