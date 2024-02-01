<template>
  <p v-for="todo in todo" v-bind:key="todo">{{ todo }}</p>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'ToDo',
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