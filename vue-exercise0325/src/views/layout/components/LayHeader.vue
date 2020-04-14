<template>
	<div class="base-header">
		<div class="logo">
			<img src="@/assets/logo.png" width="40" height="40" />
			<h4>后台管理</h4>
		</div>
		<div class="user-manual">
			<p class="name">admin</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LayHeader',
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
.base-header {
	@include make-flex();
	height: 40px;
	padding: 12px 12px;
	background:$base--color-background;
	.logo {
		@include make-flex();
		color: #fff;
		h4 {
			@include header-h4();
			margin-left: 0.5rem;
		}
	}
	.user-manual {
		color: $base--text-on-bg ;
	}
}
</style>
