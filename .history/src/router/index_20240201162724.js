// Trong file index.js của Vue Router
import { createRouter, createWebHistory } from 'vue-router';
import CompTodo from '../components/CompTodo.vue'; // Đảm bảo đường dẫn và tên file đúng

const routes = [
  { path: '/CompTodo', component: CompTodo } // Sử dụng CompTodo đúng cách ở đây
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
