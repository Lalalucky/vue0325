<template>
  <div>
    <label>输入框：</label>
    <input v-bind="$attrsAll" @input="$emit('input',$event.target.value)" />
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  computed: {
    $attrsAll() {
      return {
        value: this.$vnode.data.model.value,
        ...this.$attrs
      };
    }
  }
};
</script>