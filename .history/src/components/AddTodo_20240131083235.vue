<template>
  <form>
    <input type="text"/>
    <input type="submit" value="Add" class="add-btn">
  </form>
</template>

<script>
export default {
    name :'Add-todo',
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