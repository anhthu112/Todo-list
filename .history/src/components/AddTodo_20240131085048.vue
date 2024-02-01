<template>
  <form>
    <input type="text" placeholder="New member" v-model="title" @input="check"/>
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
        const check =()=>{
            console.log(title.value)
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