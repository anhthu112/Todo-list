// main.js
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; // Di chuyển dòng này xuống dưới import Vue

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
