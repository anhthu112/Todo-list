<template>
    <TodoItem v-for="todoItem in todo" v-bind:key="todoItem.id" v-bind:todoProps="todoItem"
    v-on:item-complete="markComplete" v-on:deleteItem="deleteItem"
    />
  </template>
  <script>
  import TodoItem from './TodoItem.vue'
  export default {
      name: 'ToDo',
      data () {
          return {
              todo: [
                  { id: 1, title: "Choi Seongcheol", completed: false },
                  { id: 2, title: "Yoon Jeonghan", completed: false },
                  { id: 3, title: "Jeon Wonwoo", completed: true },
              ]
          }
      },
      methods: {
          markComplete(todoItem) {
              console.log(todoItem);
              todoItem.completed = !todoItem.completed;
              console.log(todoItem.completed);
          },
          deleteItem(todoItem) {
              console.log(todoItem);
              todoItem = null;
          }
      },
      components: {
          TodoItem,
      }
  }
  </script>
  
  <style>
  </style>
  