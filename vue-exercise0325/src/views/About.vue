<template>
  <div>
    <p>{{form.name}}</p>
    <p>{{form.age}}</p>
    <p>{{form.friend}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "zhangsan",
        age: "24",
        friend:"xiaohong"
      }
    };
  },
  mounted() {
    this.queryInfo();
  },
  serverData: {
    name: "lisi",
    age: "12"
  },
  methods: {
    queryInfo() {
      setTimeout(() => {
        this.form = Object.assign({}, this.form , this.$options.serverData);
      }, 2000);
    }
  }
};
</script>

<style>
</style>