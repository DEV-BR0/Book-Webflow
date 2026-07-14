import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1500,
});

createApp(App).use(router).mount("#app");
