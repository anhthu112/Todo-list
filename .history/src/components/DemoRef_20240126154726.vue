<template>
    <CompTask>
        <ul class='tabs-header'>
            <li v-for="(item,index) in tabsHeader" v-bind:key="index">{{ item.text }}</li>
        </ul>
        <div class="tab-content tab1" v-if tabActive="===0">
            <p>Content 1</p>
        </div>
        <div class="tab-content tab2">
            <p>Content 2</p>
        </div>
        <div class="tab-content tab3">
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

            ]
        }
    }
}
</script>

<style>
    .tabs-header{
        margin:0;
        padding:0;
        display:flex;
        list-style: none;
    }
    .tabs-header li{
        padding: 8px 15px;
        background: #ccc;
        cursor: pointer;
    }
    .tabs-header li:hover{
        background: #333;
        color:#fff;

    }
</style>