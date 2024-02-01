<template>
    <div>
      <AddTodo @add-todo="addTodo" />
      <TodoItem
        v-for="todoItem in todo"
        :key="todoItem.id"
        :todoProps="todoItem"
        @item-complete="markComplete"
        @deleteItem="deleteItem(todoItem)"
      />
    </div>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue';
  import AddTodo from './AddTodo.vue';
  
  export default {
    name: 'ToDo',
    data() {
      return {
        todo: [
          { id: uuidv4(), title: "Choi Seongcheol", completed: false },
          { id: uuidv4(), title: "Yoon Jeonghan", completed: false },
          { id: uuidv4(), title: "Jeon Wonwoo", completed: true },
        ]
      };
    },
    methods: {
      markComplete(todoItem) {
        console.log(todoItem);
        todoItem.completed = !todoItem.completed;
        console.log(todoItem.completed);
      },
      deleteItem(todoItem) {
        console.log(todoItem);
        // Xóa mục từ mảng
        this.todo = this.todo.filter(item => item !== todoItem);
      },
      addTodo(newTodo) {
        this.todo.push(newTodo);
        console.log(newTodo)
      }
    },
    components: {
      TodoItem,
      AddTodo,
    },
  };
  </script>
  
  <style>
  </style>
  