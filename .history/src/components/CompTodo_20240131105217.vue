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
          const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15');
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
      async deleteItem(todoItem) {
        try {
          await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoItem.id}`)
          console.log(todoItem);
          this.todo = this.todo.filter(item => item.id !== todoItem.id);
        } catch (err) {
          console.log(err)
        }
      },
      async addTodo(newTodo) {
        try{
            const res = await axios.post('https://jsonplaceholder.typicode.com/todos')
            this.todo.push(newTodo);
            console.log(newTodo);
        }
        catch (err) {
            console.log(err)
        }
        
      }
    },
    mounted() {
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
  