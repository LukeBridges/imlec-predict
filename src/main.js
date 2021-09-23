import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "./assets/tailwind.css";

import "@/api/firebase";

import { registerAuthModule } from "./Auth";
import { registerAnalyzeModule } from "./Analyze";

registerAuthModule(App, store, router);
registerAnalyzeModule(App, store, router);

createApp(App).use(store).use(router).mount("#app");
