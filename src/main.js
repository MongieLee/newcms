import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "vx-easyui/dist/themes/default/easyui.css";
import "vx-easyui/dist/themes/icon.css";
import "vx-easyui/dist/themes/vue.css";
import "./x.css";
import AvueFormDesign from "@sscfaith/avue-form-design";
import locale from 'vx-easyui/dist/locale/easyui-lang-zh_CN'
Vue.use(EasyUI, {
  locale: locale
});
import EasyUI from "vx-easyui";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.use(EasyUI);
Vue.use(AvueFormDesign);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");