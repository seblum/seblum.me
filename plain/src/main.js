import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BackTop from "@mlqt/vue-back-top";
import "./assets/scss/style.scss";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "G-E5LD5KD037" },
});

Vue.use(BackTop);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
