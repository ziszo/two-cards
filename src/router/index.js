import Vue from "vue";
import VueRouter from "vue-router";
import FirstCard from "../views/FirstCard.vue";
import SecondCard from "../views/SecondCard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: FirstCard,
  },
  {
    path: "/gesture",
    name: "gesture",
    component: SecondCard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
