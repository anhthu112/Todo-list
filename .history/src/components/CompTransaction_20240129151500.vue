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
        const reponse = await fetch ("http://localhost:3000/posts");
        const data = await reponse.json();
        console.log(data[0]);
    }
}
</script>

<style>

</style>