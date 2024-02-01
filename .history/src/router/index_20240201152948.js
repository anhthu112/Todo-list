import Vue from 'vue';
import VueRouter from 'vue-router';
import CompTodo from '../components/CompTodo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/comptodo', // Đường dẫn cho tuyến đường
    name: 'CompTodo', // Tên cho tuyến đường
    component: CompTodo // Component tương ứng
  },
  // Các tuyến đường khác
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
