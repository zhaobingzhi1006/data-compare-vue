import { createApp, useAttrs } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)
app.use(router).mount('#app')
app.use(ElementPlus)
// createApp(App).use(router).mount('#app')
