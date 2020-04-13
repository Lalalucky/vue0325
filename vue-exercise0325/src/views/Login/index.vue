<template>
	<div class="login">
		<h1>login</h1>
		<div class="form-container">
			<el-form :model="userForm" ref="userForm" :rules="rules" label-width="100px">
				<el-form-item label="账户名" prop="account">
					<el-input type="text" v-model="userForm.account" autocomplete="false"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pwd">
					<el-input type="password" v-model.trim="userForm.pwd" show-password auto-complete="new-password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="resetForm('userForm')">重置</el-button>
					<el-button type="primary" @click="submitUserForm('userForm')">提交</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
// import {} from '@/utils/validate.js';
export default {
	data() {
		var validatorPwd = (rule, value, callback) => {
			if (value === '' || value === null || value === undefined) {
				return callback(new Error('请输入密码'));
			} else if (value.length < 6 || value.length > 20) {
				return callback(new Error('请输入6到12位的密码'));
			}
		};
		var validatorAccount = (rule, value, callback) => {
			if (value === '' || value === null || value === undefined) {
				return callback(new Error('请输入账号'));
			}
		};
		return {
			userForm: {
				account: null,
				pwd: null
			},
			loading: null,
			rules: {
				account: [{ require: true }, { validator: validatorAccount, trigger: 'blur' }],
				pwd: [{ require: true }, { validator: validatorPwd, trigger: 'blur' }]
			}
		};
	},
	components: {},
	mounted() {},
	methods: {
		resetForm(formname) {
			this.$refs[formname].resetFields();
		},
		submitUserForm(formname) {
			const submitFn = () => {
				this.loading = this.$loading({
					lock: true,
					text: '登录中……',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				setTimeout(() => {
					console.log('提交成功');
					this.loading = null;
				}, 200);
			};
			this.$refs[formname].validate(valida => {
				if (valida) {
					submitFn();
				}
			});
		}
	}
};
</script>

<style scoped lang="scss" src="./index.scss"></style>
