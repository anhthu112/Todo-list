<template>
  <p :class="['todo-item', t]">
    <input type="checkbox">
    {{ todoProps.title }}
    <button class="btn-delete">Delete</button>
</p>
  
</template>

<script>
export default {
    name:'todo-item',
    props:['todoProps']
}
</script>

<style>
    .todo-item{
        text-decoration: line-through;
    }
</style>