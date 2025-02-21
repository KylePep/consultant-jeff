import '@mdi/font/css/materialdesignicons.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerGlobalComponents } from './registerGlobalComponents.js'

const app = createApp(App)
await registerGlobalComponents(app)
app.use(router)

app.mount('#app')
