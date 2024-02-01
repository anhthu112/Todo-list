import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// main.js
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import CompTodo from './components/CompTodo.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Login },
  { path: '/comtodo', component: CompTodo }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
