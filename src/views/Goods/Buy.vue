<template>
    <div>
        <van-card style='margin-top:30px' centered
        num="1"
        price="6000.00"
        desc="用了6个月，9成新。"
        title="Huawei Mate30 pro"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
            <!-- <template #tags>
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
            </template>
            <template #footer>
                <van-button size="mini">按钮</van-button>
                <van-button size="mini">按钮</van-button>
            </template> -->
        </van-card>
        <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        >
        选择收货地址
      </van-divider>
        <van-address-list style='margin-bottom: 50px;bottom:40px'
        v-model="chosenAddressId"
        :list="list"
        
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        />

        <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit" 
        />

        <van-overlay z-index='15555' :show="show" @click="show = false">
          <div class="wrapper" @click.stop>
            <van-field v-model="address" label="收货地址" />
            <van-field v-model="name" label="收件人" />
            <van-field v-model="tel" label="手机" />
            <van-button block style='width:90%;margin:auto;margin-top:40px' color='#c70039'  round type="info" @click='modify()'>{{button}}</van-button>
          </div>
        </van-overlay>


    </div>
</template>

<style>
.van-card__title{
  font-size:18px;
  padding-bottom: 10px
}
    .wrapper{
        margin-top:100px;
        
    }
    .wrapper>div{
        width:90%;
        margin:auto;
        margin-top:20px;
    }
    
    .van-address-list__bottom{
        margin-bottom:80px;
    }
</style>

<script type="text/javascript">
    import { Toast } from 'vant';
    export default {
      
      data() {
        return {
            tel:'',
            address:'',
            name:'',
            index:'',
            button:'',
          chosenAddressId: '1',
          show:false,
          list: [
          {
              id: '1',
              name: '张三',
              tel: '13000000000',
              address: '杭电生活区21号楼506寝室'
          },
          {
              id: '2',
              name: '李四',
              tel: '1310000000',
              address: '杭电生活区5号楼103寝室'
          }
          ],
         
      }
  },
  methods: {
    onSubmit(){
        this.$router.push('/goods/pay')
    },
    modify(){
        if(this.button=='确认新增'){
            this.add()
            return
        }
        var data = {
              id: this.index+1,
              name: this.name,
              tel: this.tel,
              address: this.address
          }
        this.list[this.index]=data;
        this.show=false;
        
        Toast('修改成功')
    },
    onAdd() {
        this.tel = '';
        this.name = '';
        this.address = '';
        this.index = '';
        this.show=true;
        this.button='确认新增';
        
    },
    add(){
        var data = {
              id: this.list.length,
              name: this.name,
              tel: this.tel,
              address: this.address
        }
        this.list.push(data);
        this.show=false;
        Toast('新增成功')
    },
    onEdit(item, index) {
        this.show=true;
        this.tel = item.tel;
        this.name = item.name;
        this.address = item.address;
        this.index = index;
        this.button = '确认修改';
    }
  }
}

</script>