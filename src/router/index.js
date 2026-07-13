import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Home from "../pages/Home.vue";
import Services from "../pages/Services.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/service",
      name: "service",
      component: Services,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
});

export default router;
