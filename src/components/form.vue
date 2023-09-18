<template>
	<vs-input
		v-for="input in inputs"
		:style="`direction: ${input.rtl ? 'rtl' : 'ltr'}; margin-bottom: 30px`"
		class="inputx"
		:placeholder="input.placeholder"
		v-model="model[input.name]"
	/>
	<slot />
	<vs-button class="submit-btn" color="primary" type="filled">
		{{ buttonText }}
	</vs-button>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from "vue";
interface IntInput {
	rtl?: boolean;
	placeholder: string;
	name: string;
}
const props = defineProps<{
	inputs: IntInput[];
	buttonText: string;
}>();
const model = reactive(
	props.inputs
		.map((input) => {
			return {
				[input.name]: ref(""),
			};
		})
		.reduce((acc, curr) => ({ ...acc, ...curr }))
);

watch(model, () => console.log(model));
</script>

<style>
input {
	background-color: #edecec;
	border: 0 !important;
	padding: 10px 20px !important;
	width: 350px !important;
}
button {
	width: 350px !important;
	translate: -75px;
}
.submit-btn {
	box-shadow: 0px 16px 40px -16px #404eb2 !important;
}
</style>
