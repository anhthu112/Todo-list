import {createRouter, createWebHistory} from 'vue-router';
import CompHome from '.components/Comphome.vue';
import CompProducts from '.components/CompProducts.vue';
import CompAbout from '.components/CompAbout.vue'
const routes = [
    {path:'/', components:CompHome},
    {path:'/products', components:CompProducts},
    {path:'/about', components:CompAbout}

]
const router = createRouter ({
    history: createWebHistory (),
    routes:
})


