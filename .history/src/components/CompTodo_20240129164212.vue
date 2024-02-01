<template>
  <TodoItem v-for="todo in todo" v-bind:key="todo" v-bind:todoProps="todo"/>
</template>
<script>
import TodoItem from './TodoItem.vue'
import {ref} from 'vue'
export default {
    name: 'ToDo',
    setup(){
        const todo = ref (['Choi seongcheol', 'Yoon Jeonghan', 'Jeon Wonwoo'])
        return {
            todo
        }
    },
    components: {
        TodoItem,
    }
}
</script>

<style>

</style>