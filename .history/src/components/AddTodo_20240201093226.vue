<template>
    <form @submit.prevent="addItem">
      <input type="text" placeholder="New member" v-model="title" @input="check" class="input">
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
  
      const check = () => {
        console.log(title.value);
      };
  
      const addItem = event => {
        event.preventDefault();
        const newItem = {
          id: uuidv4(), 
          title: title.value,
          completed: false
        };
        context.emit('add-todo', newItem);
        title.value = '';
      };
  
      return {
        title,
        check,
        addItem,
      };
    },
  };
  </script>
  
  <style>
form {
  display: flex; 
  align-items: center; 
}

.input {
  padding: 8px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  margin-right: 8px; 
  font-size: 16px; 
}

.add-btn {
  padding: 8px 16px; 
  background-color: #007bff; 
  color: #fff; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
}

.add-btn:hover {
  background-color: #0056b3; 
}

.input::placeholder {
  color: #aaa; 
}

.input:focus {
  outline: none; 
  border-color: #007bff; 
}

  </style>
  