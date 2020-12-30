import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

import {
	Toast,
	Dialog
} from 'vant'

const app = createApp(App)
// app.use(store)
app.use(router)

app.use(Toast).use(Dialog)

app.mount('#app')
