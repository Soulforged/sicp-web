// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { 
  MdButton, 
  MdContent, 
  MdCard, 
  MdLayout,
  MdRipple,
  MdApp,
  MdToolbar
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import App from './App'
import router from './router'
import './registerServiceWorker'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdCard)
Vue.use(MdLayout)
Vue.use(MdRipple)
Vue.use(MdApp)
Vue.use(MdToolbar)

/* eslint-disable no-new */
new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')

