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
        await const data = fetch ("http://localhost:3000/posts");
    }
}
</script>

<style>

</style>