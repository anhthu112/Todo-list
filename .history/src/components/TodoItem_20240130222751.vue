<template>
    <p :class="['todo-item', todoProps.completed ? 'is-complete' : '']">
      <input type="checkbox" :checked="todoProps.completed" v-on:change="markItemCompleted"/>
      {{ todoProps.title }}
      <button v-on:click="delteteItem" class="btn-delete">Delete</button>
    </p>
  </template>
  
  <script>
  export default {
      name: 'todo-item',
      data (){
        return {
          // checkMark: this.todoProps.completed,
        }
      },
      props: ['todoProps'],
      methods:{
        markItemCompleted(){
          this.$emit('item-complete',this.todoProps);
        }, 
        deleteItem(){
          this.$emit('deleteItem', this.todoProps);
          console.log(this.todoProps)
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
  