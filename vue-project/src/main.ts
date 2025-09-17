import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'

import TMagicEditor from '@tmagic/editor'
import TMagicElementPlusAdapter from '@tmagic/element-plus-adapter'

import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import '@tmagic/editor/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
// 让编辑器知道要通过该适配器使用 Element Plus 组件
app.use(TMagicEditor, TMagicElementPlusAdapter)
app.use(router)

app.mount('#app')
