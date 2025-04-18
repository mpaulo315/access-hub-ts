import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "./App.vue";
import { ToastService, Tooltip } from "primevue";
import axios from "axios";

import "./style.css";
import router from "./routers";
import { createPinia } from "pinia";

axios.defaults.withCredentials = true;
const Pinia = createPinia();

const app = createApp(App);
app.directive("tooltip", Tooltip);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false,
    },
  },
});

app.use(router);

app.use(Pinia);

app.use(ToastService);

app.mount("#app");
