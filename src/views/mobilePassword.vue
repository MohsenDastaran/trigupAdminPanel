<template>
	<h2 style="margin-bottom: 20px; margin-top: 100px; translate: -75px">
		کد ارسال‌شده به موبایل را وارد کنید
	</h2>
	<confirmationCode
		style="translate: -75px"
		:NumberOfCharacters="6"
		@codeChange="code = $event"
	/>

	<vs-button class="submit-btn" color="primary" type="filled" @click="onSubmit">
		ادامه
	</vs-button>
	<vs-row
		class="router-link-wrapper"
		vs-type="flex"
		vs-justify="center"
		vs-align="center"
	>
		<a>ارسال مجدد کد</a>
		<p>کد را دریافت نکرده‌اید؟</p>
	</vs-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "../router";
import confirmationCode from "../components/ConfirmationCode.vue";
const code = ref();
const onSubmit = () => {
	if (code.value) router.push("/createPassword");
};
</script>
