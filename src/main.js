import Vue from 'vue'
import ElementUI from 'element-ui'
import { Table, TableColumn } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

// Vue.use(ElementUI);
Vue.use(Table);
Vue.use(TableColumn);

new Vue({
  render: h => h(App),
}).$mount('#app')
