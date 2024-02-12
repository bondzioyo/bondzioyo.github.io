import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { i18n } from "./plugins/i18n-config";
import registerGlobalComponents from "./plugins/global-components";

const app = createApp(App);
registerGlobalComponents(app);
app.use(i18n);
app.mount("#app");
