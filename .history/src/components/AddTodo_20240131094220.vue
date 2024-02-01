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
          id: uuidv4(), // Sử dụng uuidv4 từ 'uuid' thay vì 'uuidv4' từ 'uuidv4'
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
  }
  
  .input[type=text] {
    flex: 10;
  }
  </style>
  