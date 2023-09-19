<template>
	<h2 style="margin-bottom: 20px">ثبت نام</h2>
	<createForm
		@keyup="onKeyup"
		@submit="onSubmit"
		:inputs="inputs"
		buttonText="ادامه"
	>
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
		<vs-row vs-type="flex" vs-justify="center" style="margin-bottom: 15px">
			<vs-radio v-model="gender" vs-name="female" vs-value="female">خانم</vs-radio>
			<vs-radio
				style="margin: 0 15px"
				v-model="gender"
				vs-name="male"
				vs-value="male"
				>آقا</vs-radio
			>
			<p>جنسیت</p>
		</vs-row>
	</createForm>

	<vs-button class="register-btn" style="margin-top: 20px" type="border">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
		>
			<path
				d="M24.5 12.27C24.5 11.48 24.4285 10.73 24.3059 10H12.7605V14.51H19.371C19.0747 15.99 18.2063 17.24 16.9189 18.09V21.09H20.8627C23.1718 19 24.5 15.92 24.5 12.27Z"
				fill="#4285F4"
			/>
			<path
				d="M12.7596 23.999C16.0699 23.999 18.8388 22.919 20.8617 21.0891L16.9179 18.0891C15.8145 18.8091 14.4147 19.2491 12.7596 19.2491C9.56162 19.2491 6.85409 17.1391 5.88346 14.2891H1.81705V17.3791C3.82982 21.2991 7.96775 23.999 12.7596 23.999Z"
				fill="#34A853"
			/>
			<path
				d="M5.88442 14.2891C5.62899 13.5691 5.49617 12.7991 5.49617 11.9991C5.49617 11.1991 5.63921 10.4291 5.88442 9.70914V6.61914H1.81801C0.980203 8.23914 0.5 10.0591 0.5 11.9991C0.5 13.9391 0.980203 15.7591 1.81801 17.3791L5.88442 14.2891Z"
				fill="#FBBC05"
			/>
			<path
				d="M12.7596 4.74999C14.568 4.74999 16.1823 5.35999 17.4594 6.54999L20.9537 3.13C18.8388 1.19 16.0699 0 12.7596 0C7.96775 0 3.82982 2.7 1.81705 6.61999L5.88346 9.70999C6.85409 6.85999 9.56162 4.74999 12.7596 4.74999Z"
				fill="#EA4335"
			/>
		</svg>
		ثبت نام با گوگل
	</vs-button>
	<vs-row
		class="router-link-wrapper"
		vs-type="flex"
		vs-justify="center"
		vs-align="center"
	>
		<router-link to="/login"> وارد شوید </router-link>
		<p>حساب کاربری دارید؟</p>
	</vs-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import createForm from "../components/form.vue";
import { passwordStrength } from "check-password-strength";
const inputs = [
	{ name: "name", placeholder: "نام", rtl: true },
	{ name: "surname", placeholder: "نام خانوادگی", rtl: true },
	{ name: "email", type: "email", placeholder: "ایمیل" },
	{ name: "number", type: "number", placeholder: "موبایل" },
	{
		name: "password",
		placeholder: "رمز عبور",
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
const gender = ref();
const strengthState = ref({ value: "Too weak" });
const onKeyup = (model: { password: string }) => {
	strengthState.value = passwordStrength(model.password);
};
const onSubmit = (model: string[]) => router.push("/dashboard");
</script>
<style scoped>
.register-btn {
	direction: rtl;
	margin: 15px 0;
}
.register-btn svg {
	translate: 40px -1px;
	position: absolute;
}
</style>
