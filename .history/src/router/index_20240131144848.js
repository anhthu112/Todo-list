import {createRouter, createWebHistory} from 'vue-router';
import CompHome from '.components/Comphome.vue';
import CompProducts from '.components/CompProducts.vue';
import CompAbout from '.components/CompAbout.vue'
const routes = [
    {path:'/', components:CompHome},
    {path:'/', components:CompProducts},
    {path:'/', components:CompAbout}

]


