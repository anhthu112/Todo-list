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
    setup(props, context){
        const title = ref ('')

        const check =()=>{
            console.log(title.value)
        }
        const addItem = event => {
            event.preventDefault()
        const newItem = {
            id:4,
            title:title.value,
            completed: false
        }     
        context.emit('add-todo', newItem)       
        }
        
        return {
            title,
            check, 
            addItem,
            newItem,
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