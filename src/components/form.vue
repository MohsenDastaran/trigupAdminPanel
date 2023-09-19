<template>
	<vs-input
		v-for="input in inputs"
		:style="`direction: ${input.rtl ? 'rtl' : 'ltr'}; translate: ${
			input.rtl ? '0' : '-150px'
		}; `"
		class="inputx"
		:placeholder="input.placeholder"
		:label="input.label"
		:type="input.type"
		:icon="input.icon"
		:icon-no-border="input['icon-no-border']"
		v-model="model[input.name]"
		@keyup="onSubmit('keyup')"
	/>
	<slot />
	<vs-button
		class="submit-btn"
		color="primary"
		type="filled"
		@click="onSubmit('submit')"
	>
		{{ buttonText }}
	</vs-button>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
interface IntInput {
	rtl?: boolean;
	placeholder: string;
	label: string;
	type: string;
	name: string;
	icon: string;
	"icon-no-border": boolean;
}
const emit = defineEmits(["submit", "keyup"]);
const onSubmit = (emitKey: "submit" | "keyup") => {
	const results: any = {};
	for (const key in model) {
		results[key] = model[key];
	}
	emit(emitKey, results);
};
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

// watch(model, () => console.log(model));
</script>

<style>
input.vs-inputx {
	background-color: #edecec;
	border: 0 !important;
	padding: 10px 20px !important;
	width: 350px !important;
	margin-bottom: 30px !important;
}
button {
	width: 350px !important;
	translate: -75px;
}
.submit-btn {
	box-shadow: 0px 16px 40px -16px #404eb2 !important;
}
</style>
