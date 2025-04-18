import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "./App.vue";
import { Tooltip } from "primevue";
import axios from "axios";

import "./style.css";
import router from "./routers";

axios.defaults.withCredentials = true;

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

app.mount("#app");
