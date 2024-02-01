import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// main.js
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import LoginComponent from './components/LoginComponent.vue';
import ComTodoComponent from './components/ComTodoComponent.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: LoginComponent },
  { path: '/comtodo', component: ComTodoComponent }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
