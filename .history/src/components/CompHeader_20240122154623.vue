<template>
    <header><h1>{{ title }}</h1></header>
    <button v-on:click="title='Jeon Wonwoo'"></button>
</template>
<script>
    export default{
        name: 'comp-header',
        props:{
            title: String,
        },
        data (){
            return {
            }
        }
    }
</script>