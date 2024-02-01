<template>
    <h1>{{ title }}</h1>
    <slot></slot>
</template>

<script>
export default {
    name: 'comp-task',
    props:{
        title: String,
    },
    data (){
        return {

        }
    },
    methods: {

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
    .active{
        background: #000;
    }
</style>