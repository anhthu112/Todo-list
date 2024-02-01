<template>
    <header>
        <h1>{{ titles }}</h1>
    </header>
    <button v-on:click="changeHeader">Thay đổi title từ compheader</button>
</template>
<script>
    export default{
        name: 'comp-header',
        props:{
            titles: String,
        },
        data (){
            return {
            }
        },
        methods:{
            changeHeader(){
                this.$emit('changeTitleEvent');
            }
        }
    }
</script>