import { createRouter, createWebHistory } from "vue-router";
import login from "./views/login.vue";
import forgotPassword from "./views/forgotPassword.vue";
const routes = [
	{
		path: "/",
		redirect: "login",
	},
	{
		path: "/login",
		name: "login",
		component: login,
	},
	{
		path: "/forgotPassword",
		name: "forgotPassword",
		component: forgotPassword,
	},
	{
		path: "/register",
		name: "register",
		component: forgotPassword,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
