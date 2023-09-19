import { createRouter, createWebHistory } from "vue-router";
import login from "./views/login.vue";
import register from "./views/register.vue";
import forgotPassword from "./views/forgotPassword.vue";
import emailPassword from "./views/emailPassword.vue";
import mobilePassword from "./views/mobilePassword.vue";
import createPassword from "./views/createPassword.vue";
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
		path: "/emailPassword",
		name: "emailPassword",
		component: emailPassword,
	},
	{
		path: "/mobilePassword",
		name: "mobilePassword",
		component: mobilePassword,
	},
	{
		path: "/forgotPassword",
		name: "forgotPassword",
		component: forgotPassword,
	},
	{
		path: "/createPassword",
		name: "createPassword",
		component: createPassword,
	},
	{
		path: "/register",
		name: "register",
		component: register,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
