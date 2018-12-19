import Vue from 'vue'
import Fly from 'flyio/dist/npm/wx'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$request = new Fly()

const app = new Vue(App)
app.$mount()
