import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import * as PUB from "@/util/addressapi"

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
app.config.globalProperties.$PUB = PUB;

