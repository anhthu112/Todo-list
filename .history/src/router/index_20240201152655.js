import Vue from 'vue';
import VueRouter from 'vue-router';
import ComTodo from '../components/ComTodo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/comptodo', // Đường dẫn cho tuyến đường
    name: 'CompTodo', // Tên cho tuyến đường
    component: ComTodo // Component tương ứng
  },
  // Các tuyến đường khác
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
