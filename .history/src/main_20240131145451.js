import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

const myApp = createApp(App); // Sửa tên biến thành myApp
myApp.use(router);
myApp.mount('#app');
