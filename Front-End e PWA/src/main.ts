import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import "./registerServiceWorker";
// import Buefy from 'buefy';
// import 'buefy/dist/buefy.css';
// import VueResource from 'vue-resource';
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;



// Vue.use(Buefy);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
// Vue.use(VueResource);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");



const prod = process.env.NODE_ENV === 'production'
const shouldSWDev = 'serviceWorker' in navigator && !prod
const shouldSW = 'serviceWorker' in navigator && prod
if (shouldSW) {
  navigator.serviceWorker.register('../service-worker.js').then(() => {
    console.log("Service Worker Registered!")
  })
}
else if(shouldSWDev){
  navigator.serviceWorker.register('../service-worker-dev.js').then(() =>{
    console.log(('Service Worker Registered!'))
  })
}

