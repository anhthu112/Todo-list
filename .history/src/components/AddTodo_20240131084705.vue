<template>
  <form>
    <input type="text"/>
    <input type="submit" value="Add" class="add-btn">
  </form>
</template>

<script>
import {ref} from 'vue'
export default {
    name :'Add-todo',
    setup(){
        
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