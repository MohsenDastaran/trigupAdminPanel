<template>
	<div v-if="route.name !== 'dashboard'">
		<vs-button
			v-if="route.name !== 'login' && route.name !== 'register'"
			@click="router.go(-1)"
			class="back-btn"
			type="flat"
			icon="navigate_next"
		>
			بازگشت
		</vs-button>
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
					:src="`${route.name}.svg`"
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
	</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import router from "../router";

const route = useRoute();
</script>

<style>
.vs-image--img {
	background-repeat: no-repeat;
	background-position: unset !important;
}
.back-btn {
	position: absolute !important;
	top: 60px;
	right: -50px;
	direction: rtl;
	width: unset !important;
}
</style>
