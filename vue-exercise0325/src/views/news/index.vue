<template>
  <div>
    新闻
    <router-link :to="{ name:'news-manage' }">manage</router-link>|
    <router-link :to="{ name:'news-create' }">create</router-link>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsIndex",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
