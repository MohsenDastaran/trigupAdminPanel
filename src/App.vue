<script setup lang="ts">
import authContainer from "./views/authContainer.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
	<authContainer v-if="route.name !== 'dashboard'">
		<router-view> </router-view>
	</authContainer>
	<router-view v-else> </router-view>
</template>

<style scoped></style>
