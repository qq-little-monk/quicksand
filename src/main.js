import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//vant
import { 
  Tabbar,
  TabbarItem,
  Swipe, 
  SwipeItem,
  Search,
  Grid, 
  GridItem,
  Field, 
} from 'vant';

Vue.use(Swipe );
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Field);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
