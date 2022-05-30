import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { VueHammer } from "vue2-hammer";
VueHammer.config.swipe = {
  direction: 24,
};
Vue.use(VueHammer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
