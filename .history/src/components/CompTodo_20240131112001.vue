<template>
    <form @submit.prevent="addItem" class="add-todo-form">
      <input type="text" placeholder="Enter new todo" v-model="title" class="input-field">
      <input type="submit" value="Add" class="add-btn">
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { v4 as uuidv4 } from 'uuid';
  
  export default {
    name: 'AddTodo',
    setup(props, context) {
      const title = ref('');
  
      const addItem = event => {
        event.preventDefault();
        if (!title.value.trim()) return; // Validate input
        const newItem = {
          id: uuidv4(),
          title: title.value.trim(),
          completed: false
        };
        context.emit('add-todo', newItem);
        title.value = '';
      };
  
      return {
        title,
        addItem,
      };
    },
  };
  </script>
  
  <style>
  form.add-todo-form {
    display: flex;
    margin-bottom: 1rem;
  }
  
  .input-field {
    flex: 1;
    margin-right: 0.5rem;
  }
  
  .add-btn {
    flex: 0;
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  .add-btn:hover {
    background-color: #45a049;
  }
  </style>
  