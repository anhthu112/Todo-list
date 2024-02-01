import {createRouter, createWebHistory} from 'vue-router'
import CompTodo from '../components/CompTodo.vue'
const routes =[
  {path: '/' , components: CompTodo}
]
const router = createRouter ({
  history: createWebHistory(),
  routes
})
export default router