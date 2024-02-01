<template>
  <form v-on:submit="addItem">
    <input type="text" placeholder="New member" v-model="title" v-on:input="check"/>
    <input type="submit" value="Add" class="add-btn">
  </form>
</template>

<script>
import {ref} from 'vue'
export default {
    name :'Add-todo',
    setup(){
        const title = ref ('')
        const check =()=>{
            console.log(title.value)
        }
        const addItem = envent => 
        return {
            title,
            check
        }
    }
}
</script>

<style>
    form {
        display:flex;
    }
    .input[type=text]{
        flex:10;

    }
</style>