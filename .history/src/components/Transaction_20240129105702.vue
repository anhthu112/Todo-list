<template>
  
</template>

<script>
export default {
    data (){
        return {
            transaction:[],
        };
    },
    create (){
        fetch ("http://localhost:3000/posts");
    }
}
</script>

<style>

</style>