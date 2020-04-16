<template>
    <div>
        <!-- 密码输入框 -->
        <van-password-input style='margin-top:190px'
        :value="value"
        info="密码为 6 位数字"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        />
        <!-- 数字键盘 -->
        <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
        />

    </div>
</template>
<script type="text/javascript">
    import { Toast } from 'vant';
    export default {
      data() {
        return {
          value: '',
          showKeyboard: true
      };
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if(this.value.length==6){
        Toast.success('支付成功');
        this.$router.push('/goods/order');
      }
  },
  onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
  }
}
}
</script>