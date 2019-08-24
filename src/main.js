import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

import scroller from '@/components/scroll'
Vue.component('scroller', scroller)

import loading from '@/components/loading'
Vue.component('loading', loading)

Vue.filter('setWh', (url, wh) => {
    return url.replace(/w\.h/, wh);
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')