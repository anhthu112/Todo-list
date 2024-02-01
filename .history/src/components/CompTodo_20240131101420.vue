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
  import axios from 'axios';
  
  export default {
    name: 'ToDo',
    data() {
      return {
        todo: []
      };
    },
    methods: {
      async getAlltodo() {
        try {
          const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
          this.todo = res.data;
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      },
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
        console.log(newTodo);
      }
    },
    mounted() {
      // Gọi hàm này khi component được tạo ra để lấy dữ liệu từ API
      this.getAlltodo();
    },
    components: {
      TodoItem,
      AddTodo,
    },
  };
  </script>
  
  <style>
  </style>
  