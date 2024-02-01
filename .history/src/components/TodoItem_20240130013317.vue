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
          if (this.checkMark===false){
            this.checkMark===true
          } else {
            this.checkMark===false
          }
          console.log(this.checkMark)
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
  