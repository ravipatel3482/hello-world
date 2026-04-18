import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'bootstrap/dist/css/bootstrap.min.css' // Add this line
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Optional: for modals/dropdowns
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
