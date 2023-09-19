<template>
	<h2 style="margin-bottom: 20px; margin-top: 100px">فراموشی رمز عبور</h2>
	<createForm @submit="onSubmit" :inputs="inputs" buttonText="ادامه" />
</template>

<script setup lang="ts">
import createForm from "../components/form.vue";
import router from "../router";
import { validateEmail, validateMobile } from "../utils/validators";

const inputs = [
	{
		name: "emailOrMobile",
		placeholder: "موبایل / ایمیل",
		rtl: true,
		label: "شماره موبایل یا ایمیل خود را وارد کنید",
	},
];
const onSubmit = (model: string[]) => {
	console.log(model);
	if (validateEmail(model.emailOrMobile)) router.push("/emailPassword");
	else if (validateMobile(model.emailOrMobile)) router.push("/mobilePassword");
};
</script>

<style scoped>
.login-btn {
	direction: rtl;
	margin: 15px 0;
}
.login-btn svg {
	translate: 40px -1px;
	position: absolute;
}
.router-link-wrapper {
	translate: -60px;
}
.router-link-wrapper p {
	margin: 0 10px;
	direction: rtl;
}
</style>
