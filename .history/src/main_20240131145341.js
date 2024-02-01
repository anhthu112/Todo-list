import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
const app = createApp(app)
app.use(router)
createApp(App).mount('#app')
