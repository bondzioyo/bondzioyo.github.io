import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { i18n } from "./plugins/i18n-config";

const app = createApp(App)
app.use(i18n)
app.mount("#app");
