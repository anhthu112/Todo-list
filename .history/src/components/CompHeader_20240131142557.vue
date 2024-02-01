<template>
    <nav>
        <ul class="nav-link">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
        </ul>
    </nav>
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
                console.log('before');
                this.$emit('changeTitleEvents');
                console.log('after');
            }
        }
    }
</script>
<style scoped>
    nav{
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }
    .nav ul.nav-link{
        display:flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        padding:0;
    } 
</style>