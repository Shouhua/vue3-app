import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import vFocus from './directives/focus.directive'

import './assets/main.css'
import { routes } from './router.js'
import { createRouter, createWebHistory } from 'vue-router'

import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'

const observer = new PerformanceObserver(list => {
  list.getEntries().forEach((entry) => {
    if(entry.entryType === 'measure') {
      console.log(`${entry.name}[${entry.entryType}]: ${entry.duration}`)
    }
  })
})

observer.observe({ entryTypes: [ 'mark', 'measure'] })

const app = createApp(App)

app.config.globalProperties.$name = 'hello, world'

let router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
})

if (import.meta.hot) {
  let removeRoutes = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot.acceptDeps('./routes.js', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

app.use(router)

app.use(vFocus)
// app.config.performance = true

app.config.productTip = false
app.use(Antd)

const proxy = app.mount('#app')
// console.log('proxy: ', proxy)
