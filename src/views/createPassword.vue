import loginVue from './login.vue';
<template>
	<h2 style="margin-bottom: 20px; margin-top: 100px; translate: -75px">
		رمز عبور جدید خود را وارد کنید
	</h2>

	<createForm @keyup="onKeyup" :inputs="inputs" buttonText="ذخیره">
		<vs-progress
			class="progress"
			:percent="states[strengthState.value].percent"
			:color="states[strengthState.value].color"
		></vs-progress>
		<p
			style="width: 350px; margin-bottom: 10px"
			:style="`color: rgb(${states[strengthState.value].rgb})`"
		>
			{{ states[strengthState.value].translation }}
		</p>
	</createForm>
</template>

<script setup lang="ts">
import { ref } from "vue";
import createForm from "../components/form.vue";
import confirmationCode from "../components/ConfirmationCode.vue";
import { passwordStrength } from "check-password-strength";
const inputs = [
	{
		name: "password",
		type: "password",
		placeholder: "رمز عبور جدید",
		icon: "visibility",
		"icon-no-border": true,
		rtl: true,
	},
	{
		name: "confirmPassword",
		type: "password",
		placeholder: "تکرار رمز عبور جدید",
		icon: "visibility",
		"icon-no-border": true,
		rtl: true,
	},
];
const states = {
	"Too weak": {
		translation: "خیلی ضعیف",
		color: "danger",
		percent: 10,
		rgb: " 255,71,87",
	},
	Weak: { translation: "ضعیف", color: "warning", percent: 30, rgb: "255,186,0" },
	Medium: {
		translation: "متوسط",
		color: "success",
		percent: 60,
		rgb: "70,201,58",
	},
	Strong: {
		translation: "قوی",
		color: "success",
		percent: 100,
		rgb: "70,201,58",
	},
};
const strengthState = ref({ value: "Too weak" });
const onKeyup = (model: { password: string; confirmPassword: string }) => {
	strengthState.value = passwordStrength(model.password);
};
</script>
<style></style>
