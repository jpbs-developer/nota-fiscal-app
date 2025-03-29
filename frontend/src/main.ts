import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import { vMaska } from 'maska/vue'
createApp(App).directive('maska', vMaska).use(router).mount('#app')
