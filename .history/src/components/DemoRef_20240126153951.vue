<template>
    <CompTask>
        <ul class="'tabs-header'">
            <li v-for="(item,index) in tabsHeader" v-bind:key="index">{{ item.text }}</li>
        </ul>
    </CompTask>
</template>

<script>
import CompTask from './CompTask.vue'
export default {
    name: 'demo-slot',
    components: {
        CompTask
    },
    data(){
        return {
            tabsHeader:[
                {text: 'tab1'},
                {text: 'tab2'},
                {text: 'tab3'},

            ]
        }
    }
}
</script>

<style>
    .
</style>