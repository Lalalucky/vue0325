<template>
  <div>
    新闻{{g_showUserName}}
    <router-link :to="{ name:'news-manage' }">manage</router-link>|
    <router-link :to="{ name:'news-create' }">create</router-link>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "newsIndex",
  data() {
    return {};
  },
  computed:{
    ...mapGetters({
      g_showUserName:'user/g_showUserName'
    })
  },
  components: {},
  mounted() {
    console.log(this.$store);
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
