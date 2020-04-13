<template>
  <label class="son">
    {{$attrs.label}}
    <input :value="val" @input="$emit('update:val',$event.target.value)" />
  </label>
</template>
<script>

export default {
  name:"son",
  props: ["val"],
  created(){
    console.log(this.$parent);
  }
};
</script>