<template>
    <p :class="['todo-item', todoProps.completed ? 'is-complete' : '']">
      <input type="checkbox" :checked="todoProps.completed" v-on:change="markItemCompleted"/>
      {{ todoProps.title }}
      <button class="btn-delete">Delete</button>
    </p>
  </template>
  
  <script>
  export default {
      name: 'todo-item',
      data (){
        return {
          checkMark: this.todoProps.completed,
        }
      },
      props: ['todoProps'],
      methods:{
        markItemCompleted(){
          console.log(this.todoProps.id);
          this.$emit('item-complete');
        }
      }

  }
  </script>
  
  <style>
  .todo-item {
  }
  
  .is-complete {
      text-decoration: line-through;
  }
  </style>
  