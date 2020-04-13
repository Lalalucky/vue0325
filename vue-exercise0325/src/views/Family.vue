<template>
  <div class="parent">
    <p>父组件传入子组件的值：{{name}}</p>
    <fieldset>
      <legend>子组件</legend>
      <child :val.sync="name" label="输入框"></child>
    </fieldset>
  </div>
</template>

<script>
import Child from "@/components/son";
export default {
  components: { Child },
  data() {
    return {
      name: "linda"
    };
  }
};
</script>