<template>
  <div>
    <my-input placeholder="请输入你的姓名" type="text" title="姓名" v-model="name"/>
  </div>
</template>

<script>
import myInput from '@/components/baseInput.vue'
export default {
  props: {},
  data() {
    return {
      name:''
    };
  },
  updated(){
    console.log(this.name);
  },
  components: {
    myInput
  }
};
</script>

<style scoped lang="scss">
</style>
