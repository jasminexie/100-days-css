import Vue from 'vue';
import App from './index.vue';
import { Select, Icon, Option, Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Select);
Vue.use(Option);
Vue.use(Icon);
Vue.use(Button);

new Vue({
  el: '#app',
  render: h => h(App)
});
