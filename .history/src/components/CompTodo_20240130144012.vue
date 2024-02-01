<template>
  <TodoItem v-for="todo in todo" v-bind:key="todo.id" v-bind:todoProps="todo"
  v-on:item-complete="markComplete"
  />
</template>
<script>
import TodoItem from './TodoItem.vue'
import {ref} from 'vue'
export default {
    name: 'ToDo',
    setup(){
        const todo = ref (
            [
            {id:1,
                title: "Choi Seongcheol",
                completed: false,
            },
            {id:2,
                title: "Yoon Jeonghan",
                completed: false,
            },
            {id:3,
                title: "Jeon Wonwoo",
                completed: true,
            },
            ]
        )
        return {
            todo
        }
    },
    methods: {
        markComplete(data){
            console.log(data)
        }
    },
    components: {
        TodoItem,
    }
}
</script>

<style>

</style>