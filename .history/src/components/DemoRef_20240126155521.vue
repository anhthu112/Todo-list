<template>
    <CompTask>
        <ul class='tabs-header'>
            <li v-for="(item,index) in tabsHeader" 
            v-bind:key="index"
            v-on:click="changeTab(index)"
            >{{ item.text }}</li>
        </ul>
        <div class="tab-content tab1" v-if="tabActive === 0">
            <p>Content 1</p>
        </div>
        <div class="tab-content tab2"  v-if="tabActive === 1">
            <p>Content 2</p>
        </div>
        <div class="tab-content tab3"  v-if="tabActive === 2">
            <p>Content 3</p>
        </div>
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

            ],
            tabActive : 0
        }
    },
    methods: {
            changeTab(index){
                this.
            }
        }
}
</script>

