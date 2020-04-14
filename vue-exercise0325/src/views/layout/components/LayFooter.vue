<template>
	<div class="base-footer">
    &copy;离离原上草，一岁一枯荣。
  </div>
</template>

<script>
export default {
  name:'LayFooter',
	data() {
		return {};
	},
	components: {},
	mounted() {},
	methods: {}
};
</script>

<style scoped lang="scss">
@import '@/scss/index.scss';

.base-footer{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	padding: 8px 0 ;
	line-height: 32px;
	background: $base--color-background;
	color: $base--text-on-bg ;
}
</style>
