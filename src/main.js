import '@mdi/font/css/materialdesignicons.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerGlobalComponents } from './registerGlobalComponents.js'

const root = createApp(App)
async function init() {
  await registerGlobalComponents(root)
    .use(router)
    .mount('#app')
}
init()