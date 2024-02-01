<template>
  
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'todo',
    setup(){
        const todo = ref (['Choi seongcheol', 'Yoon Jeonghan', 'Jeon Wonwoo'])
        return {
            todo
        }
    }
}
</script>

<style>

</style>