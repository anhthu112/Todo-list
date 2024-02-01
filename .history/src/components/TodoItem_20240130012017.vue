<template>
    <p :class="['todo-item', todoProps.completed ? 'is-complete' : '']">
      <input type="checkbox" :checked="todoProps.completed" v-on:change="markItemCompleted"/>
      {{ todoProps.title }}
      <button class="btn-delete">Delete</button>
    </p>
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
      name: 'todo-item',
      data (){
        return {

        }
      },
      props: ['todoProps'],
      methods:{
        markItemCompleted(){
          console.log('mark')
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
  