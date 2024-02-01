<template>
  <TodoItem v-for="todo in todo" v-bind:key="todo.id" v-bind:todoProps="todo"
  v-on:item-complete="markComplete" v-on:deleteItem="deleteItem"
  />
</template>
<script>
import TodoItem from './TodoItem.vue'
// import {ref} from 'vue'
export default {
    name: 'ToDo',
    props: {
        todo{
            type: Araa
        }
    },
    data (){
        return {

        }
    },

    methods: {
        markComplete (data) {
      console.log(data);
      data.completed = !data.completed;
      console.log(data.completed);
    }
    },
    deleteItem(data){
        console.log(this.todo);
        this.todo = this.todo.filter(a=>a.id!=data.id);
    },
    components: {
        TodoItem,
    }
}
</script>

<style>

</style>