<template>
    <h1>anna</h1>
</template>

<script>
export default {
    data (){
        return {
            posts:[],
        };
    },
    async created (){
        await fetch ("http://localhost:3000/posts").then((reponse)=>console.log(reponse.json()));
    }
}
</script>

<style>

</style>