<template>
  <form>
    <input type="text" placeholder="New member" v-model="title"/>
    <input type="submit" value="Add" class="add-btn">
  </form>
</template>

<script>
import {ref} from 'vue'
export default {
    name :'Add-todo',
    setup(){
        const title = ref ('')
        return {
            title
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