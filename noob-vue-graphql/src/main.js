import Vue from 'vue'
import App from './App.vue'
import AtUI from 'at-ui';
import 'at-ui-style';

Vue.config.productionTip = false
Vue.use(AtUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
