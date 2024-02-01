<template>
  <TodoItem v-for="todo in todo" v-bind:key="todo.id" v-bind:todoProps="todo"
  v-on:item-complete="markComplete" v-on:deleteItem="deleteItem"
  />
</template>
<script>
import TodoItem from './TodoItem.vue'
// import {ref} from 'vue'
export default {
    name: 'ToDo',
    data (){
        return {
            todo:
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
        }
    },

    methods: {
    markComplete (data) {
      console.log(data);
      data.completed = !data.completed;
    //   console.log(data.completed);
    }
    },
    deleteItem(todo){
        console.log(todo);

    },
    components: {
        TodoItem,
    }
}
</script>

<style>

</style>