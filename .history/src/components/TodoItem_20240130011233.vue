<template>
    <p :class="['todo-item', todoProps.completed ? 'is-complete' : '']">
      <input type="checkbox" :checked="">
      {{ todoProps.title }}
      <button class="btn-delete">Delete</button>
    </p>
  </template>
  
  <script>
  export default {
      name: 'todo-item',
      props: ['todoProps']
  }
  </script>
  
  <style>
  .todo-item {
  }
  
  .is-complete {
      text-decoration: line-through;
  }
  </style>
  