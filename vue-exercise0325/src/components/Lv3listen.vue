<template>
  <div>
    <p>Lv3------------</p>
    <div>{{msg2}}</div>
    $attrs : {{this.$attrs}}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:['msg2'],
  computed: {
   
  },
  created() {},
  mounted() {
    console.log(this.$attrs);
    this.$emit('test2','from Lv3')
  },
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
</style>
