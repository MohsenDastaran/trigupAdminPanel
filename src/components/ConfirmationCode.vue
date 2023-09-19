<template>
	<div class="code-container">
		<input
			v-for="i in NumberOfCharacters"
			:key="i"
			ref="setInputRef"
			@keyup.exact="setFinalCode()"
			@keydown="keydown($event, i - 1)"
			@keyup.ctrl.v="Paste()"
			@paste="Paste()"
			type="number"
			class="code"
			placeholder="_"
			min="0"
			max="9"
			required
			onkeydown="javascript: return event.keyCode === 8 ||
      event.keyCode === 46 ? true : !isNaN(Number(event.key))"
		/>
	</div>
</template>

<script>
export default {
	props: {
		NumberOfCharacters: Number,
	},
	data() {
		return {
			inputRefs: [],
			sepratedPastedCode: [],
			finalCode: "",
		};
	},
	watch: {
		finalCode(newValue) {
			if (newValue.length === this.NumberOfCharacters) {
				this.onChange();
			}
		},
	},
	mounted() {
		this.inputRefs = this.$refs.setInputRef;
		this.inputRefs[0].focus();
	},
	methods: {
		Paste() {
			navigator.clipboard
				.readText()
				.then((text) => {
					this.sepratedPastedCode = text.split("");
					const length = this.$refs.setInputRef.length;
					for (let i = 0; i <= length; i++) {
						this.$refs.setInputRef[i].value = "";
						this.$refs.setInputRef[i].value = this.sepratedPastedCode[i];
					}
				})
				.catch((err) => {
					console.error("Failed to read clipboard contents: ", err);
				});
			this.inputRefs[this.NumberOfCharacters - 1].focus();
			this.onChange();
		},
		keydown(e, i) {
			// todo: "e" and "." should not pass

			if (e.key >= 0 && e.key <= 9) {
				this.inputRefs[i].value = "";
				if (i === this.inputRefs.length - 1) return;
				setTimeout(() => this.inputRefs[i + 1].focus(), 10);
			} else if (e.key === "Backspace") {
				if (i === 0) return;
				setTimeout(() => this.inputRefs[i - 1].focus(), 10);
			}
		},
		setFinalCode() {
			this.finalCode = "";
			this.inputRefs.forEach((eachCharacter) => {
				const value = eachCharacter.value;
				if (value !== "") {
					this.finalCode += value;
				}
			});
		},
		onChange() {
			this.$emit("codeChange", parseInt(this.finalCode));
		},
	},
};
</script>

<style scoped>
* {
	box-sizing: border-box;
}

.code-container {
	direction: ltr;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 5% 0;
}

.code {
	border-radius: 5px;
	font-size: 30px;
	height: 60px;
	width: 45px;
	border: 1px solid var(--secondary);
	margin: 1% 0;
	text-align: center;
	font-weight: 300;
	transition: all 0.3s ease-in;
	-moz-appearance: textfield;
	background-color: #f9f9f9;
	margin: 0 5px;
}

.code::-webkit-outer-spin-button,
.code::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.code:valid {
	border-color: var(--info);
	box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.25);
}

@media (max-width: 600px) {
	.code {
		font-size: 25px;
		height: 50px;
		width: 35px;
	}
}
</style>
