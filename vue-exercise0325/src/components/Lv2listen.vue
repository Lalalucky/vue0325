<template>
  <div>
    <fieldset>
      <legend>
        <p>Lv2---------------</p>
        <div>{{msg1}}</div>
        <div>$attrs : {{this.$attrs}}</div>
        <Lv3 v-bind="$attrs" v-on="$listeners"></Lv3>
      </legend>
    </fieldset>
  </div>
</template>

<script>
import Lv3 from "@/components/Lv3listen.vue";
export default {
  props: {
    msg1: {
      type: String
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$emit("test1", "from Lv2");
  },
  watch: {},
  methods: {},
  components: {
    Lv3
  }
};
</script>

<style scoped lang="scss">
</style>
