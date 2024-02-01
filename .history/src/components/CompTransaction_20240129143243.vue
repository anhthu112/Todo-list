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
    created (){
        fetch ("http://localhost:3000/posts");
    }
}
</script>

<style>

</style>