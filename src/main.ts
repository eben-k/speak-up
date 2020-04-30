import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import VueChatScroll from "vue-chat-scroll";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/loading.css";
import "./assets/css/loading-btn.css";

Vue.config.productionTip = false;
Vue.use(VueChatScroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
