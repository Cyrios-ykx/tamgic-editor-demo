import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

import { HelloWorld } from './ui/index'

const app = createApp(App)

app.use(createPinia())
// 使用router的话m-editor会warning，并且无法正常显示画布
// app.use(router)

app.component('hello-world', HelloWorld)
app.mount('#app')
