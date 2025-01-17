import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './localize/index'

import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
