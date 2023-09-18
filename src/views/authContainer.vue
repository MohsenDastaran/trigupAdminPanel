<template>
	<vs-row style="height: 100vh">
		<vs-col
			vs-type="flex"
			vs-justify="center"
			vs-align="center"
			vs-sm="0"
			vs-lg="7"
		>
			<vs-image
				style="width: 100%; height: 100%; translate: 50px 50px"
				:src="`src/assets/${route.name}.svg`"
			/>
		</vs-col>
		<vs-col
			vs-type="flex"
			vs-align="center"
			vs-sm="12"
			vs-w="5"
			style="flex-direction: column; margin: 100px 0"
		>
			<slot />
		</vs-col>
	</vs-row>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style>
.vs-image--img {
	background-repeat: no-repeat;
	background-position: unset !important;
}
</style>
