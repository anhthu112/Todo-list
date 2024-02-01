// Trong file index.js của Vue Router
import { createRouter, createWebHistory } from 'vue-router';
import CompTodo from '../components/CompTodo.vue'; 
import Login from '../components/Login.vue'; 


const routes = [
  { path: '/CompTodo', component: CompTodo }, 
  { path: '/Login', component: Login } 

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
