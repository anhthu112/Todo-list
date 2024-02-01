<template>
    <p :class="['todo-item', todoProps.completed ? 'is-complete' : '']">
      <input type="checkbox" :checked="todoProps.completed" v-on:change="markItemCompleted"/>
      {{ todoProps.title }}
      <button v-on:click="deleteItem" class="btn-delete">Delete</button>
    </p>      

  </template>
  
  <script>
  export default {
      name: 'todo-item',
      data (){
        return {
        }
      },
      props: ['todoProps'],
      methods:{
        markItemCompleted(){
          this.$emit('item-complete',this.todoProps);
        }, 
        deleteItem(){
          this.$emit('deleteItem', this.todoProps);
        }
      }

  }
  </script>
  
  <style>
.todo-item {
  display: flex; 
  align-items: center; 
  margin-bottom: 8px; 
  font-size: 16px; 
}

.is-complete {
  text-decoration: line-through;
}

.is-complete {
  color: #888;
}


.todo-item input[type="checkbox"] {
  margin-right: 8px; 
}

.btn-delete {
  background-color: #dc3545; 
  color: #fff; 
  border: none; 
  padding: 4px 8px; 
  border-radius: 4px; 
  cursor: pointer; 
  text-decoration: none;
}

.btn-delete:hover {
  background-color: #c82333; 
}

  </style>
  