import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Vuesax from "vuesax3";
import router from "./router";
import "vuesax3/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css";

const app = createApp(App);
app.use(router);
app.use(Vuesax, {
	// options here
});
app.mount("#app");
