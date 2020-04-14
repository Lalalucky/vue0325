<template>
	<div class="base-layout">
    <lay-header></lay-header>
    <lay-aside></lay-aside>
    <div class="content-stage">
      <transition mode="out-in" name="fade">
        <!-- <keep-alive> -->
          <router-view class="app-main-content"></router-view>
        <!-- </keep-alive> -->
      </transition>
    </div>
    <lay-footer></lay-footer>
  </div>
</template>

<script>
import LayHeader from './components/LayHeader.vue';
import LayFooter from './components/LayFooter.vue';
import LayAside from './components/aside.vue'
export default {
  name:'layout',
	data() {
		return {};
	},
	components: {
    LayHeader,
    LayFooter,
    LayAside
  },
	mounted() {},
	methods: {}
};
</script>

<style scoped lang="scss"></style>
