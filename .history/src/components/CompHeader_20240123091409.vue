<template>
    <header><h1>{{ title }}</h1></header>
    <!-- <button v-on:click="changeHeader">Thay đổi title từ compheader</button> -->
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
        },
        // methods:{
        //     changeHeader(){
        //         this.title='Jeon Wonwoo';
        //     }
        // }
    }
</script>