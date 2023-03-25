import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

import {
  Row,
  Col,
  Container,
  Main,
  Footer,
  Header,
}
from 'element-ui'

Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Header)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');



