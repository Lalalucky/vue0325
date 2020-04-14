<template>
	<aside class="left-group">
		{{ showAllMenu }}
		<div class="is-show-whole-column"></div>
		<div class="column-list"></div>
	</aside>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'column-list',
	data() {
		return {};
	},
	computed: {
		...mapGetters({
			showAllMenu: 'g_showAllMenu'
		})
	},
	components: {},
	mounted() {
		this.$store.dispatch('fnShowAllMenu',false)
	},
	methods: {}
};
</script>

<style scoped lang="scss"></style>
