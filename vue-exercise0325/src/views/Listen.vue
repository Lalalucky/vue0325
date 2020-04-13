<template>
  <div>
    <fieldset>
      <legend>
        <Lv2 :msg1="msg1" :msg2="msg2" :msg-attr="'hello baby'" :anotherMsg="'i am another msg'" @test1="onTest1" @test2="onTest2"></Lv2>
      </legend>
    </fieldset>
  </div>
</template>

<script>
import Lv2 from "@/components/Lv2listen.vue";
export default {
  data() {
    return {
      msg1: "hello LV2",
      msg2: "hello Lv3"
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onTest1(ctx) {
      console.log(`test1 run ${ctx} `);
    },
    onTest2(ctx) {
      console.log(`test2 run ${ctx} `);
    }
  },
  components: {
    Lv2
  }
};
</script>

<style scoped lang="scss">
</style>
