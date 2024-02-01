<template>
    <div>
      <TodoItem v-for="todoItem in todos" :key="todoItem.id" :todo="todoItem" @item-complete="markComplete" />
    </div>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue';
  import { ref } from 'vue';
  
  export default {
    name: 'ToDo',
    components: {
      TodoItem,
    },
    setup() {
      const todos = ref([
        { id: 1, title: "Choi Seongcheol", completed: false },
        { id: 2, title: "Yoon Jeonghan", completed: false },
        { id: 3, title: "Jeon Wonwoo", completed: true },
      ]);
  
      const markComplete = (todo) => {
        console.log(todo);
        todo.completed = !todo.completed;
        console.log(todo.completed);
      };
  
      return {
        todos,
        markComplete,
      };
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  